import React from 'react'
import MenuItems from '../../components/MenuItems'
import { NorthIndianFood } from './data/fooddata';



export interface FoodTypes {
    name: string;
    image: string;
    price: number;
    description: string;
    category: string
}[];

const FoodList: React.FC = () => {
    return (
        <div className='bg-slate-800 shadow-md rounded-xl p-8 m-4 w-full max-w-5xl h-[85vh]  mx-auto overflow-y-scroll scrollbar-hide'>
            <div className='my-6 px-3 md:px-10'>
                <h2 className='text-xl md:text-3xl font-semibold text-white '>Food List</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                    {NorthIndianFood.map((northFood: FoodTypes, index: number) => (
                        <MenuItems key={index}
                            name={northFood.name}
                            description={northFood.description}
                            image={northFood.image}
                            price={northFood.price}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodList
