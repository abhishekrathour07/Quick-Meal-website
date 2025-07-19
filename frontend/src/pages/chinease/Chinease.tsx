import React from 'react'
import MenuItems from '../../components/MenuItems';
import { food_list } from '../../assets/frontend_assets/assets';
import Footer from '../../components/Footer';

interface chineasetypes {
    _id: string,
    name: string;
    image?: string;
    price: number;
    description: string;
}

const Chinease: React.FC = () => {

    const chineaseData = food_list.filter((items) => items.category === 'Noodles' || items.category === 'Pasta')
    return (
        <div className='bg-[url("images/background.png")]'>
            <div className='mt-6 px-3 md:px-20'>
                <h2 className='text-xl md:text-3xl font-semibold '>Chinease Masala</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">

                    {chineaseData.map((chinease: chineasetypes) => (
                        <MenuItems key={chinease._id}
                            name={chinease.name}
                            description={chinease.description}
                            image={chinease.image || "https://via.placeholder.com/150"}
                            price={chinease.price}
                        />

                    ))}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Chinease
