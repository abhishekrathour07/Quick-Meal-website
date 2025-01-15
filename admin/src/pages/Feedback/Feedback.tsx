import React from 'react';

const CustomerFeedback: React.FC = () => {
  const feedbacks = [
    {
      id: 1,
      customer: 'Abhishek singh',
      feedback: 'The delivery was super fast! Loved the food.',
      rating: 5,
    },
    {
      id: 2,
      customer: 'rahul',
      feedback: 'Food was good but the delivery was late.',
      rating: 3,
    },
    {
      id: 3,
      customer: 'Rohit',
      feedback: 'Amazing service and delicious meals!',
      rating: 5,
    },
    {
      id: 4,
      customer: 'Shashi',
      feedback: 'The delivery was super fast! Loved the food.',
      rating: 5,
    },
    {
      id: 5,
      customer: 'Rishu',
      feedback: 'Food was good but the delivery was late.',
      rating: 3,
    },
    {
      id: 6,
      customer: 'Vineet',
      feedback: 'Amazing service and delicious meals!',
      rating: 3,
    },
  ];

  return (
    <div className='bg-white bg-[url("/background.png")] shadow-md rounded-xl p-6 m-4 w-full lg:max-w-6xl mx-auto'>
      <h2 className='text-2xl font-semibold text-black text-center mb-6'>Customer Feedback</h2>

      <div className='space-y-6  overflow-hidden overflow-y-scroll scrollbar-hide h-[75vh]'>
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className='bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200  transition duration-300 hover:scale-95'>
            <h3 className='text-lg font-semibold text-black'>{feedback.customer}</h3>
            <p className='text-gray-700 mt-2'>{feedback.feedback}</p>
            <div className='mt-4'>
              <span className='font-semibold text-yellow-500'>
                {Array(feedback.rating)
                  .fill('⭐')
                  .join('')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
