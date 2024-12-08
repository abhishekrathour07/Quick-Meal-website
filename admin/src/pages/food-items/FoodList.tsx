import React, { useEffect, useState } from 'react'
import MenuItems from '../../components/MenuItems'
import axios from 'axios';
import { toast } from 'sonner';



export interface FoodTypes {
    name: string;
    image: string;
    price: number;
    description: string;
    category: string
}[];

type props = {
    url: string
}
const FoodList: React.FC<props> = ({ url }) => {
    // Fetch the list of food items

    const [list, setList] = useState([]);
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Error fetching data");
        }
    };

    useEffect(() => {
        fetchList();
      }, []);

    return (
        <div className='bg-slate-800 shadow-md rounded-xl p-8 m-4 w-full max-w-5xl h-[85vh]  mx-auto overflow-y-scroll scrollbar-hide'>
            <div className='my-6 px-3 md:px-10'>
                <h2 className='text-xl md:text-3xl font-semibold text-white '>Food List</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

                    {list.map((food: FoodTypes, index: number) => (
                        <MenuItems key={index}
                            name={food.name}
                            description={food.description}
                            image={`${url}/images/${food.image}`}
                            price={food.price}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default FoodList
