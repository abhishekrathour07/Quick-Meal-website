import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import orderplaced from "../../Lootie/orderplaced.json"
import { Button } from '../../components/ui/button';

const OrderSuccess: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-200 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully! 🎉</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Thank you for your purchase! Your order has been successfully placed and is now being processed.
                </p>
                <div className="p-4 flex flex-col items-center gap-4">
                    <Lottie animationData={orderplaced} loop={true} style={{ height: "360px" }} />
                    <Button onClick={() => navigate("/")} className='w-48 text-center'>
                        Back TO Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
