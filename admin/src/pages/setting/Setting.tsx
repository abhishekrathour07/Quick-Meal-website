import React from 'react';

const Setting: React.FC = () => {
  const foodCards = [
    {
      title: 'Vegetarian Meals',
      description: 'Explore a variety of plant-based dishes packed with flavor and nutrients.',
      image: 'https://images.unsplash.com/photo-1598449426314-8b02525e8733?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fHww',
    },
    {
      title: 'Vegan Delights',
      description: 'Discover vegan recipes that are as delicious as they are healthy.',
      image: 'https://media.istockphoto.com/id/1369489882/photo/variety-of-vegan-plant-based-protein-food.jpg?s=612x612&w=0&k=20&c=nKvZEd0raRryOpsGhwB9iOCEIizrDqB3XeFvRLdJOyI=',
    },
    {
      title: 'Low-Calorie Meals',
      description: 'Find recipes to help you stay within your daily calorie goals.',
      image: 'https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=0&k=20&c=SEyObHsbBsrd1XZlgEg389VT86BMFKZKfKReKyVPAk4=',
    },
    {
      title: 'Keto-Friendly Recipes',
      description: 'Indulge in high-fat, low-carb meals tailored for a keto diet.',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/masala-frittata-with-avocado-salsa-63d766e.jpg?quality=90&resize=500,454',
    },
    {
      title: 'Quick Breakfasts',
      description: 'Start your day right with these easy and nutritious breakfast ideas.',
      image: 'https://images.services.kitchenstories.io/gxInWDQniM21aQiVgvnXmDrMnvo=/3840x0/filters:quality(85)/images.kitchenstories.io/communityImages/f4604e05f6a9eaca99afddd69e849005_c02485d4-0841-4de6-b152-69deb38693f2.jpg',
    },
    {
      title: 'Snacks & Appetizers',
      description: 'Satisfy your cravings with quick and tasty snack options.',
      image: 'https://c.ndtvimg.com/2024-07/sc275mco_head_625x300_08_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384',
    },
  ];

  return (
    <div className='bg-white bg-[url("/background.png")] shadow-md rounded-xl p-6 m-4 w-full mr-4 lg:max-w-7xl mx-auto h-[87vh] overflow-y-scroll scrollbar-hide'>
      <div className='my-4 px-3 md:px-10'>
        <h2 className='text-xl md:text-3xl font-semibold text-black text-center'>
          Quick Meal Setting
        </h2>

        <p className='text-gray-600 text-center mt-2'>
          Choose your favorite meal categories and start your journey towards delicious and healthy eating.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {foodCards.map((card, index) => (
            <div
              key={index}
              className='relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300'>
              <img
                src={card.image}
                alt={card.title}
                className='w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='p-2'>
                <h3 className='text-lg font-semibold text-black'>{card.title}</h3>
              </div>
              <div className='flex gap-2 px-4 py-3'>
                <p className='text-sm text-gray-600 mt-2'>{card.description}</p>
                <button className=' h-10 bg-slate-950 text-white text-sm px-4  rounded-lg shadow-md hover:bg-slate-800 transition-colors'>
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting;
