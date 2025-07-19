import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem | string) => void; // Adds by item or itemId
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  calculateSubtotal: () => number;
  calculateTotal: () => number;
  calculateDiscount: () => number;
  food_list: any[];
  discountPercentage: number;
  url: string;
  token: string | null;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [food_list, setFoodList] = useState<any[]>([]);
  const token = localStorage.getItem("jwtToken")
  const url = import.meta.env.VITE_API_URL || "http://localhost:3005";
  const discountPercentage = 10;

  // Helper function to sync cart with localStorage for non-logged-in users
  const syncCartToLocalStorage = (cartData: CartItem[]) => {
    if (!token) {
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  };

  // Load cart data from the backend
  const loadCartData = async () => {
    if (!token) return; // Only sync from backend if token is present
    try {
      const response = await axios.get(`${url}/api/cart/get`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(response.data.cartData);
    } catch (error) {
      console.error("Error fetching cart data from backend:", error);
    }
  };

  // Fetch food list from the server
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  // Add an item to the cart
  const addToCart = async (item: CartItem | string) => {
    if (typeof item === "string") {
      const foodItem = food_list.find((food) => food._id === item);
      if (foodItem) {
        item = { name: foodItem.name, image: foodItem.image, price: foodItem.price, quantity: 1 };
      } else {
        return;
      }
    }
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId: item.name },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.name === item.name);
      const updatedCart = existingItem
        ? prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        : [...prev, { ...item, quantity: 1 }];
      syncCartToLocalStorage(updatedCart);
      return updatedCart;
    });

 
  };

  // Remove an item from the cart
  const removeFromCart = async (name: string) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.name !== name);
      syncCartToLocalStorage(updatedCart);
      return updatedCart;
    });
    console.log(token);
    
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId: name },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    }
  };

  // Update the quantity of a specific item
  const updateQuantity = (name: string, quantity: number) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(quantity, 0) } : item
      );
      syncCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Calculate the subtotal of the cart
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Calculate the total amount (including delivery fee)
  const calculateTotal = () => {
    const deliveryFee = 2; // Flat delivery fee
    return calculateSubtotal() + deliveryFee;
  };

  // Calculate the discount amount
  const calculateDiscount = () => {
    return (calculateSubtotal() * discountPercentage) / 100;
  };

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const savedToken = localStorage.getItem("jwToken");
      if (savedToken) {

        await loadCartData(); // Sync cart data from backend for logged-in users
      } else {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          setCart(JSON.parse(storedCart)); // Load cart from localStorage for non-logged-in users
        }
      }
    };
    loadData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateSubtotal,
        calculateTotal,
        calculateDiscount,
        food_list,
        discountPercentage,
        url,
        token,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
