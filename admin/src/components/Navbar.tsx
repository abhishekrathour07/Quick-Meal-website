import { User } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogOutdropdown from './logOutdropdown';


const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("jwtToken")
    return (
        <div className="bg-slate-950 h-16 flex justify-between items-center text-white px-8 shadow-md">
            {/* Logo Section */}
            <a href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer" />
                <span className="text-xl font-bold tracking-wide text-gray-200">QuickMeal</span>
            </a>

            {/* Navigation Links */}
            <div className="flex space-x-8 items-center">
                <p
                    onClick={() => navigate('/api/faq')}
                    className="text-lg font-medium hover:text-gray-400 transition duration-200 cursor-pointer">
                    FAQ
                </p>
                <p
                    onClick={() => navigate('/api/feedback')}
                    className="text-lg font-medium hover:text-gray-400 transition duration-200 cursor-pointer">
                    Feedback
                </p>
                <p
                    onClick={() => navigate('/api/reports')}
                    className="text-lg font-medium hover:text-gray-400 transition duration-200 cursor-pointer">
                    Profit Chart
                </p>
                <p
                    onClick={() => navigate('/api/track-order')}
                    className="text-lg font-medium hover:text-gray-400 transition duration-200 cursor-pointer">
                    Track Orders
                </p>
                <p
                    onClick={() => navigate('/api/tasks')}
                    className="text-lg font-medium hover:text-gray-400 transition duration-200 cursor-pointer">
                    Tasks
                </p>
                <div
                    className={`cursor-pointer hover:text-orange-500 `}>{
                        token ?
                            <LogOutdropdown />
                            :
                            <User onClick={() => navigate('/login')} />
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;
