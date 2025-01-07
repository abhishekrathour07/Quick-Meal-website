import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What is Quick Meal Setting?',
      answer: 'Quick Meal Setting allows you to configure preferences for your meals, making it easier to find recipes or meal plans tailored to your needs.',
    },
    {
      question: 'How can I change my meal preferences?',
      answer: 'You can update your preferences by navigating to the Quick Meal Setting page and adjusting the options as needed.',
    },
    {
      question: 'Can I save multiple settings?',
      answer: 'Yes, you can save multiple settings to cater to different dietary preferences or meal plans.',
    },
    {
      question: 'Is there a mobile version of the settings?',
      answer: 'The settings page is fully responsive and can be accessed on mobile devices for convenience.',
    },
    {
      question: 'How do I reset my settings?',
      answer: 'To reset your settings, click on the "Reset" button at the bottom of the Quick Meal Setting page.',
    },
  ];

  return (
    <div className='bg-white bg-[url("/background.png")] shadow-md rounded-xl p-2 m-4 w-full lg:max-w-5xl h-[85vh] mx-auto overflow-y-scroll scrollbar-hide'>
      <div className='my-4 px-3 md:px-10'>
        <h2 className='text-xl md:text-3xl font-semibold text-black'>Frequently Asked Questions</h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
              <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
