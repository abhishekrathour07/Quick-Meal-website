import React from 'react'
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
    return (
        <div className='bg-[url("images/background.png")]'>
            <div className='my-6 px-3 md:px-20'>
                <h2 className='text-xl md:text-3xl font-semibold '>North-Indian Main Course</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">

                    {NorthIndianFood.map((northFood: northFoodTypes, index: number) => (
                        <MenuItems key={index}
                            name={northFood.name}
                            description={northFood.description}
                            image={northFood.image}
                            price={northFood.price}
                        />

                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NorthIndian
