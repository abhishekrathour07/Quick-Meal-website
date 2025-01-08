import React from 'react';
import ReportsChart from './ReportsChart';

const Reports: React.FC = () => {
    const data = [
        {
            title: 'Total Sales',
            value: '$75,420',
            growth: '+12%',
            color: 'text-green-500',
            icon: '💰',
        },
        {
            title: 'New Customers',
            value: '1,120',
            growth: '+8%',
            color: 'text-blue-500',
            icon: '👥',
        },
        {
            title: 'Orders Delivered',
            value: '2,345',
            growth: '+10%',
            color: 'text-orange-500',
            icon: '📦',
        },
        {
            title: 'Cancelled Orders',
            value: '145',
            growth: '-3%',
            color: 'text-red-500',
            icon: '❌',
        },
    ];

    const popularItems = [
        { name: 'Grilled Chicken', orders: 340 },
        { name: 'Vegan Burger', orders: 290 },
        { name: 'Pizza Margherita', orders: 270 },
    ];

    return (
        <div className="bg-white bg-[url('/background.png')] shadow-md rounded-xl flex flex-col gap-6 p-6 m-4 w-full lg:max-w-6xl mx-auto h-[87vh] overflow-hidden overflow-y-scroll scrollbar-hide">
            <h2 className="text-4xl font-semibold text-black text-center mb-6">Reports & Insights</h2>
                <ReportsChart />
           
            {/* Key Statistics */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg shadow-md bg-gray-50 flex flex-col items-center">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-2xl font-bold mt-2">{item.value}</p>
                        <p className={`mt-2 text-sm font-medium ${item.color}`}>{item.growth}</p>
                    </div>
                ))}
            </div>

            {/* Popular Items */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mb-4">Top Popular Items</h3>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {popularItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center">
                            <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-gray-700 mt-2">Orders: {item.orders}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Monthly Revenue Chart */}

        </div>
    );
};

export default Reports;
