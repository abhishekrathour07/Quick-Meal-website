import React from "react";
import { useCart } from '../../context/Cartcontext';
import { Minus, MoveRight, Plus, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const placeOrderValidation = ()=>{
        const token = localStorage.getItem('jwtToken')
        token?navigate("/cart/address"):navigate("/login")
    }
    
   

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();
   
    return (
        <div className="p-4 flex flex-col lg:flex-row justify-center lg:gap-8 bg-slate-100 min-h-screen">
            {/* Cart Items Section */}
            <div className="w-full lg:w-[60%] overflow-auto lg:h-full bg-white rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 p-4">Your Cart</h2>
                {cart.length === 0 ? (
                    <div className="flex justify-center items-center h-64">
                        <img
                            src="/images/empty.png"
                            alt="Empty cart"
                            className="w-48 h-48 md:w-64 md:h-64"
                        />
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {cart.map((item) => (
                            <div
                                key={item.name}
                                className="flex justify-between items-center p-4 border-b"
                            >
                                {/* Item Details */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-16 w-16 md:h-20 md:w-20 rounded"
                                    />
                                    <div>
                                        <h3 className="text-lg text-orange-600 font-semibold">{item.name}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                                {/* Quantity and Remove */}
                                <div className="flex items-center gap-2">
                                    <button
                                        className="px-2 py-1 bg-slate-200 text-red-600 rounded"
                                        onClick={() => {
                                            updateQuantity(item.name, item.quantity - 1);
                                            if (item.quantity === 1) removeFromCart(item.name);
                                        }}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <p className="w-7 text-center text-slate-900">
                                        {item.quantity}
                                    </p>
                                    <button
                                        className="px-2 py-1 bg-slate-200 text-green-700 rounded"
                                        onClick={() =>
                                            updateQuantity(item.name, item.quantity + 1)
                                        }
                                    >
                                        <Plus size={16} />
                                    </button>
                                    <button
                                        className="ml-4 px-3 py-1 bg-slate-900 text-white rounded"
                                        onClick={() => removeFromCart(item.name)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button className="w-full p-4 bg-slate-900 text-white text-lg"
                            onClick={placeOrderValidation} >
                            Place Order
                        </button>
                    </div>
                )}
            </div>

            {/* Price Details Section */}
            {cart.length > 0 && (
                <div className="w-full lg:w-[30%] mt-6 lg:mt-0 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-bold text-slate-500 border-b pb-2">
                            PRICE DETAILS
                        </h2>
                        <div className="flex justify-between py-2">
                            <p>MRP</p>
                            <p>{totalCost}</p>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <p>Delivery Fee</p>
                            <p className="text-green-600">
                                {totalCost > 100 ? "Free" : "20"}
                            </p>
                        </div>
                        <div className="flex justify-between py-2">
                            <p className="text-lg font-bold">Total Amount</p>
                            <p className="font-semibold">
                                {totalCost > 100 ? totalCost : totalCost + 20}
                            </p>
                        </div>
                        <p
                            className={`text-center font-semibold mt-2 ${totalCost > 100 ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {totalCost > 100
                                ? "Wohoo!! You are eligible for free delivery."
                                : `Add ${100 - totalCost} more for free delivery.`}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md mt-6 p-4 text-center">
                        <p className="text-lg text-slate-500 flex">
                        <ShieldCheck  size={44}/>  Save and Secure Payment. Easy return. 100% Authentic pruducts
                        </p>
                        <div
                            className="flex items-center justify-center gap-2 text-green-600 cursor-pointer mt-2"
                            onClick={() => navigate("/")}
                        >
                            <h2>Explore more</h2>
                            <MoveRight />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
