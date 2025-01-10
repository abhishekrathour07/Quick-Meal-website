import React from 'react';

const TrackOrder: React.FC = () => {
  const agents = [
    {
      name: 'David Lee',
      status: 'On Delivery',
      location: 'Central Park, NY',
      ordersDelivered: 25,
    },
    {
      name: 'Michael Chan',
      status: 'Available',
      location: 'Downtown, LA',
      ordersDelivered: 18,
    },
    {
      name: 'Sophia Kim',
      status: 'On Delivery',
      location: 'Brooklyn, NY',
      ordersDelivered: 30,
    },
  ];

  return (
    <div className='bg-white bg-[url("/background.png")] shadow-md rounded-xl p-6 m-4 w-full lg:max-w-6xl mx-auto overflow-y-scroll scrollbar-hide'>
      <h2 className='text-2xl font-semibold text-black text-center mb-6'>Delivery Agent Tracking</h2>

      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6'>
        {agents.map((agent, index) => (
          <div
            key={index}
            className='bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200'>
            <h3 className='text-lg font-semibold text-black'>{agent.name}</h3>
            <p className='text-sm text-gray-600 mt-2'>
              <strong>Status:</strong> {agent.status}
            </p>
            <p className='text-sm text-gray-600 mt-2'>
              <strong>Location:</strong> {agent.location}
            </p>
            <p className='text-sm text-gray-600 mt-2'>
              <strong>Orders Delivered:</strong> {agent.ordersDelivered}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrder;
