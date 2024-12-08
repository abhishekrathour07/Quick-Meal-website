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
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [food_list, setFoodList] = useState<any[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const url = "http://localhost:4000";
  const discountPercentage = 10;

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch food list from the server
  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await axios.get(`${url}/api/food/allfood`);
        setFoodList(response.data.data);
      } catch (error) {
        console.error("Error fetching food list:", error);
      }
    };

    fetchFoodList();
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const addToCart = async (item: CartItem | string) => {
    if (typeof item === "string") {
      const foodItem = food_list.find((food) => food._id === item);
      if (foodItem) {
        item = { name: foodItem.name, image: foodItem.image, price: foodItem.price, quantity: 1 };
      } else {
        return;
      }
    }

    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

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
  };

  const removeFromCart = async (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));

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

  const updateQuantity = (name: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(quantity, 0) } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const deliveryFee = 2; // Flat delivery fee
    return calculateSubtotal() + deliveryFee;
  };

  const calculateDiscount = () => {
    return (calculateSubtotal() * discountPercentage) / 100;
  };

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
        setToken,
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
