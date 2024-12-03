import React from 'react'
import MenuItems from '../../components/MenuItems'
import { southIndianFood } from './data/SouthFood';
import Footer from '../../components/Footer';


export interface southFoodTypes {
    name: string;
    image: string;
    price: number;
    description: string;
    category: string
}[];

const NorthIndian: React.FC = () => {
    return (
        <div className='bg-[url("images/background.png")]'>
            <div className='my-6 px-3 md:px-20 '>
                <h2 className='text-xl md:text-3xl font-semibold '>South-Indian Special</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">

                    {southIndianFood.map((northFood: southFoodTypes, index: number) => (
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
