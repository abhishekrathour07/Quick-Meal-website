import React from 'react';

const Dashboard: React.FC = () => {
    // Array of card data
    const cardData = [
        {
            title: "5k+",
            description: "Daily Users",
        },
        {
            title: "400+",
            description: "Food Items",
        },
        {
            title: "100K+",
            description: "Orders",
        },
        {
            title: "100+",
            description: "Connected Resturents",
        },
    ];

    return (
        <div className="bg-slate-800 shadow-md rounded-xl p-4 md:p-8 m-4 w-full max-w-3xl lg:max-w-5xl h-[85vh] mx-auto">
            <div className="bg-slate-900 drop-shadow-md rounded-xl p-4 lg:p-8 w-full flex flex-col items-center justify-between h-full overflow-y-scroll scrollbar-hide">
                {/* Welcome Section */}
                <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-100 mb-4 text-center ">
                    Welcome,By Abhishek Singh!
                </h1>
                <p className="text-base sm:text-lg text-slate-300 mb-6 text-center">
                    We're excited to have you here. Explore and manage your food items effortlessly.
                </p>

                {/* Quick Links or Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6 mt-4 w-full">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-slate-700 p-4 lg:p-6 rounded-lg shadow-lg transition duration-300 flex flex-col items-center text-center"
                        >
                            <h2 className="text-lg md:text-2xl font-semibold mb-2 text-green-400 w-24 h-24 p-4 rounded-full bg-slate-900 flex items-center justify-center">
                                {card.title}
                            </h2>
                            <p className="text-lg text-white">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <footer className="mt-8 text-slate-400 text-xs sm:text-sm">
                    © 2024 Abhishek's Food Website. All Rights Reserved.
                </footer>
            </div>
        </div>
    );
};

export default Dashboard;
