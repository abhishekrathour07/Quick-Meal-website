import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="h-auto p-6 md:p-12 bg-violet-600 text-white grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
            <div className="flex flex-col gap-4">
                <img src="/images/logo.png" alt="Company-logo" className="h-16 w-16" />
                <p>
                    The main goal of Quick Meal is to provide homemade-like food within 30 minutes. Our priority is customer health and taste.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl md:text-2xl">QUICK MEAL</h2>
                <p className="hover:text-orange-500 cursor-pointer"
                    onClick={() => navigate('/')}> Home</p>
                <p className="hover:text-orange-500 cursor-pointer"
                    onClick={() => navigate('/north-indian')}>North Indian</p>
                <p className="hover:text-orange-500 cursor-pointer"
                    onClick={() => navigate('/south-indian')}> South Indian</p>
                <p className="hover:text-orange-500 cursor-pointer"
                    onClick={() => navigate('/about')}>About Us</p>
            </div>

            {/* Contact information */}
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl md:text-2xl">GET IN TOUCH</h2>
                <p className="hover:text-orange-500 cursor-pointer">+91 93348 24803</p>
                <p className="hover:text-orange-500 cursor-pointer">officialabhisheks07@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;
