import React, { useState } from "react";
import { useCart } from "../../context/Cartcontext";
import { MoveLeft, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Payment: React.FC = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);


    const onPlaceOrder = async () => {
        try {
            if (!activePaymentMethod) {
                toast.error("Please select a payment method.");
                return;
            }

            if (cart.length === 0) {
                toast.error("Your cart is empty.");
                return;
            }

            const url = "http://localhost:3005/api/placeOrder";
            const payload = {
                userId: localStorage.getItem("userId"),
                items: cart.map(item => ({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image,
                })),
                totalAmount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            };


            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message);
                navigate('/order-success');
                localStorage.removeItem("cart");
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("An error occurred while placing the order. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-gray-100 flex flex-col md:flex-row justify-around px-4 md:px-12 gap-6 h-screen">
            <div className="w-full lg:w-60% bg-white p-8 mt-4 shadow-lg rounded-lg h-fit">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Delivery Address</h2>
                <div className="flex flex-col gap-2">
                    {/* Payment Options with Accordion */}
                    <div>
                        <div className="flex items-center border h-16 rounded-lg px-4">
                            <input
                                type="radio"
                                name="payment"
                                value="Wallet"
                                id="wallet"
                                onClick={() => setActivePaymentMethod("Wallet")}
                                className="mr-2"
                            />
                            <label htmlFor="wallet" className="cursor-pointer">
                                Wallet
                            </label>
                        </div>
                        {activePaymentMethod === "Wallet" && (
                            <div className="mt-4 p-4 bg-gray-50 border rounded">
                                <p>Enter Wallet Details:</p>
                                <input
                                    type="text"
                                    placeholder="Enter Wallet ID"
                                    className="w-full mt-2 p-2 border border-black rounded "
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center border h-16 rounded-lg px-4">
                            <input
                                type="radio"
                                name="payment"
                                value="Net Banking or UPI"
                                id="netbanking"
                                onClick={() => setActivePaymentMethod("Net Banking or UPI")}
                                className="mr-2"
                            />
                            <label htmlFor="netbanking" className="cursor-pointer">
                                Net Banking or UPI
                            </label>
                        </div>
                        {activePaymentMethod === "Net Banking or UPI" && (
                            <div className="mt-4 p-4 bg-gray-50 border rounded">
                                <p>Enter UPI ID or Bank Details:</p>
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID or Bank Account"
                                    className="w-full mt-2 p-2 border border-black rounded"
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center border h-16 rounded-lg px-4">
                            <input
                                type="radio"
                                name="payment"
                                value="Cash On Delivery"
                                id="cod"
                                onClick={() => setActivePaymentMethod("Cash On Delivery")}
                                className="mr-2"
                            />
                            <label htmlFor="cod" className="cursor-pointer">
                                Cash On Delivery
                            </label>
                        </div>
                        {activePaymentMethod === "Cash On Delivery" && (
                            <div className="mt-4 p-4 bg-gray-50 border text-green-700 rounded">
                                <p>Cash will be collected at the time of delivery.</p>
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="flex items-center border h-16 rounded-lg px-4">
                            <input
                                type="radio"
                                name="payment"
                                value="Pay Through EMI"
                                id="emi"
                                onClick={() => setActivePaymentMethod("Pay Through EMI")}
                                className="mr-2"
                            />
                            <label htmlFor="emi" className="cursor-pointer">
                                Pay Through EMI
                            </label>
                        </div>
                        {activePaymentMethod === "Pay Through EMI" && (
                            <div className="mt-4 p-4 bg-gray-50 border rounded">
                                <p>Enter EMI Card Details:</p>
                                <input
                                    type="text"
                                    placeholder="Enter Card Number"
                                    className="w-full mt-2 p-2 border border-black rounded"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={onPlaceOrder}
                    className="bg-slate-900 text-white font-semibold text-lg px-4 py-2 w-full mt-4 rounded-lg"
                >
                    Confirm Order
                </button>
            </div>

            {/* Price Details Section */}
            <div className="w-full md:w-[35%] mt-6 lg:mt-0 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md p-4 mt-4">
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
                </div>
                <div className="bg-white rounded-lg shadow-md mt-6 p-4 text-center">
                    <p className="text-lg text-slate-500 flex">
                        <ShieldCheck size={44} /> Save and Secure Payment. Easy return. 100%
                        Authentic products
                    </p>
                    <div
                        className="flex items-center justify-center gap-2 text-green-600 cursor-pointer mt-2"
                        onClick={() => navigate("/cart/address")}
                    >
                        <MoveLeft />
                        <h2>Go Back</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
