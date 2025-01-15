import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Orders', value: '1,245', icon: '📦', color: 'bg-blue-100 text-blue-600' },
    { title: 'Revenue', value: '$45,760', icon: '💰', color: 'bg-green-100 text-green-600' },
    { title: 'Pending Orders', value: '42', icon: '⏳', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Active Customers', value: '873', icon: '👥', color: 'bg-purple-100 text-purple-600' },
  ];

  const recentOrders = [
    { id: 'ORD00123', customer: 'Alice Brown', total: '$25.00', status: 'Delivered', date: '2025-01-05' },
    { id: 'ORD00124', customer: 'John Smith', total: '$18.00', status: 'Pending', date: '2025-01-05' },
    { id: 'ORD00125', customer: 'Emma Green', total: '$35.50', status: 'Preparing', date: '2025-01-04' },
  ];

  const topMeals = [
    { name: 'Grilled Chicken', orders: 320 },
    { name: 'Vegan Salad Bowl', orders: 270 },
    { name: 'Cheeseburger', orders: 250 },
  ];

  return (
    <div className='bg-white bg-[url("/background.png")] shadow-md rounded-xl p-6 m-4 w-full lg:max-w-6xl mx-auto'>
      <h2 className='text-2xl font-semibold text-black text-center mb-6'>Admin Dashboard</h2>

      {/* Stats Section */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${stat.color} flex items-center space-x-4`}>
            <div className='text-3xl'>{stat.icon}</div>
            <div>
              <h3 className='text-lg font-semibold'>{stat.title}</h3>
              <p className='text-xl font-bold'>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div className='mb-8'>
        <h3 className='text-xl font-semibold text-black mb-4'>Recent Orders</h3>
        <div className='bg-gray-50 rounded-lg shadow-md p-4 overflow-x-auto'>
          <table className='w-full text-left'>
            <thead>
              <tr className='bg-gray-100 text-gray-700'>
                <th className='p-3'>Order ID</th>
                <th className='p-3'>Customer</th>
                <th className='p-3'>Total</th>
                <th className='p-3'>Status</th>
                <th className='p-3'>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className='border-b hover:bg-gray-50 transition duration-200'>
                  <td className='p-3'>{order.id}</td>
                  <td className='p-3'>{order.customer}</td>
                  <td className='p-3'>{order.total}</td>
                  <td className={`p-3 font-semibold ${getOrderStatusColor(order.status)}`}>
                    {order.status}
                  </td>
                  <td className='p-3'>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Meals Section */}
      <div>
        <h3 className='text-xl font-semibold text-black mb-4'>Top Meals</h3>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {topMeals.map((meal, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-lg shadow-md p-4 text-center'>
              <h4 className='text-lg font-semibold'>{meal.name}</h4>
              <p className='text-gray-700 mt-2'>Orders: {meal.orders}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getOrderStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'text-green-500';
    case 'Pending':
      return 'text-yellow-500';
    case 'Preparing':
      return 'text-orange-500';
    default:
      return 'text-gray-700';
  }
};

export default Dashboard;
