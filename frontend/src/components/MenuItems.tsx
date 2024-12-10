import { CircleMinus, CirclePlus } from 'lucide-react';
import React, { useState } from 'react';
import { useCart } from '../context/Cartcontext';


// Define the props for a single food item
interface FoodItem {
    name: string;
    image: string;
    price: number;
    description: string;
}

const MenuItems: React.FC<FoodItem> = ({ name, image, price, description }) => {

    
    const { addToCart } = useCart();
    const [cartValue, setCartValue] = useState<number>(0);

    const increaseCartValue = () => {
        setCartValue(cartValue + 1);
        addToCart({ name, image, price, quantity: cartValue + 1 });
    }
    const decreaseCartValue = () => setCartValue(Math.max(0, cartValue - 1));

    return (
        <div className="flex flex-col justify-between p-4 m-2 bg-slate-100 rounded-lg py-6 drop-shadow-lg ">
            <div className="flex justify-center mb-4">
                <img src={image} alt={name} className="rounded-full h-48 w-48" />
            </div>
            <h3 className="text-lg text-center text-orange-700">{name}</h3>
            <p className="text-center">{description}</p>
            <div className="flex justify-between items-center mt-3 px-2">
                <p className="text-lg text-green-600 font-semibold">{price}</p>
                <button
                    className="px-4 bg-slate-900 py-2 rounded-xl text-white flex items-center gap-2"
                    onClick={cartValue === 0 ? increaseCartValue : undefined}
                >
                    {cartValue === 0 ? (
                        "Add to Cart"
                    ) : (
                        <div className="flex gap-3 items-center px-1">
                            <p
                                className="cursor-pointer text-white"
                                onClick={decreaseCartValue}
                            > <CircleMinus /> </p>
                            <p>{cartValue}</p>
                            <p
                                className="cursor-pointer  text-white"
                                onClick={increaseCartValue}
                            > <CirclePlus /> </p>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MenuItems;
