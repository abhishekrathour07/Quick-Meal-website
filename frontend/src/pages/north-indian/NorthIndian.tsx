import React, { useState } from 'react'
import MenuItems from '../../components/MenuItems'
import { NorthIndianFood } from './data/NorthFoodData';
import Footer from '../../components/Footer';


export interface northFoodTypes {
    name: string;
    image: string;
    price: number;
    description: string;
    category: string
}[];

const NorthIndian: React.FC = () => {

    const [category, filterCategory] = useState("All")
    const filterFoodData = category === "All" ? NorthIndianFood : NorthIndianFood.filter((items) => items.category === category);

    return (
        <div className='bg-[url("images/background.png")]'>
            <div className='my-6 px-3 md:px-20'>
                <div className='flex space-x-5 items-center'>
                    <h2 className='text-xl md:text-3xl font-semibold'>South-Indian Special</h2>
                    <select
                        className='border border-black rounded-lg py-1 px-2 outline-none w-auto font-semibold'
                        value={category}
                        onChange={(e) => filterCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">

                    {filterFoodData.map((northFood: northFoodTypes, index: number) => (
                        <MenuItems key={index}
                            name={northFood.name}
                            description={northFood.description}
                            image={northFood.image}
                            price={northFood.price}
                        />

                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NorthIndian
