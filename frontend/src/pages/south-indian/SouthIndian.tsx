import React, { useState } from 'react';
import MenuItems from '../../components/MenuItems';
import { southIndianFood } from './data/SouthFood';
import Footer from '../../components/Footer';

export interface southFoodTypes {
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}[];

const NorthIndian: React.FC = () => {
    const [category, setCategory] = useState("All");

    const filterFoodData = category === "All" ? southIndianFood : southIndianFood.filter((food) => food.category === category);

    return (
        <div className='bg-[url("images/background.png")]'>
            <div className='my-6 px-3 md:px-20'>
                <div className='flex space-x-5 items-center'>
                    <h2 className='text-xl md:text-3xl font-semibold'>South-Indian Special</h2>
                    <select
                        className='border border-black rounded-lg py-1 px-2 outline-none w-auto font-semibold'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>

                {/* Food Items */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                    {filterFoodData.map((food: southFoodTypes, index: number) => (
                        <MenuItems
                            key={index}
                            name={food.name}
                            description={food.description}
                            image={food.image}
                            price={food.price}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NorthIndian;
