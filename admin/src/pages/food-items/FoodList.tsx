import React, { useEffect, useState } from 'react';
import MenuItems from '../../components/MenuItems';
import axios from 'axios';
import { toast } from 'sonner';

export interface FoodTypes {
    _id: string; 
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}

type props = {
    url: string;
};

const FoodList: React.FC<props> = ({ url }) => {
    const [list, setList] = useState<FoodTypes[]>([]); // Update type of state

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error('Failed to fetch data');
            }
        } catch (error: any) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data');
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    const removeFood = async (id: string) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id });
            if (response.data.success) {
                toast.success('Food item removed successfully');
                setList((prevList) => prevList.filter((food) => food._id !== id)); // Update the list locally
            } else {
                toast.error('Failed to remove the food item');
            }
        } catch (error) {
            console.error('Error removing food item:', error);
            toast.error('Error removing food item');
        }
    };

    return (
        <div className="bg-slate-800 shadow-md rounded-xl p-8 m-4 w-full max-w-5xl h-[85vh] mx-auto overflow-y-scroll scrollbar-hide">
            <div className="my-6 px-3 md:px-10">
                <h2 className="text-xl md:text-3xl font-semibold text-white">Food List</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {list.map((food) => (
                        <MenuItems
                            key={food._id}
                            name={food.name}
                            description={food.description}
                            image={`${url}/uploads/${food.image}`}
                            price={food.price}
                            onRemove={() => removeFood(food._id)} // Pass remove function
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodList;
