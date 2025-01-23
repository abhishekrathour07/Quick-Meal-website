import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-[90vh] bg-gray-200 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully! 🎉</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Thank you for your purchase! Your order has been successfully placed and is now being processed.
                </p>
                
                <img
                    src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/media/90211520c82920dcaf6aea7604aeb029.gif"
                    alt="Order Success"
                    className=" mx-auto rounded-lg mb-6"
                />
                <button
                    onClick={() => navigate('/')}
                    className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition duration-200"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
