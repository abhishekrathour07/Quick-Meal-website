import React from 'react';


// Define the props for a single food item
interface FoodItem {
    name: string;
    image: string;
    price: number;
    description: string;
    onRemove:()=>void
}

const MenuItems: React.FC<FoodItem> = ({ name, image, price, description,onRemove }) => {
  
    return (
        <div className="flex flex-col justify-between p-2 lg:p-4 m-2 bg-slate-900 rounded-lg py-6 drop-shadow-lg ">
            <div className="flex justify-center mb-4">
                <img src={image} alt={name} className="rounded-full h-48 w-48" />
            </div>
            <h3 className="text-lg text-center text-green-400">{name}</h3>
            <p className="text-center text-white">{description}</p>
            <div className="flex justify-between items-center mt-3 px-2">
                <p className="text-lg text-green-400 font-semibold">{price}</p>
                <p className="text-lg bg-red-600 px-4 py-1 rounded-lg text-white cursor-pointer" onClick={()=>onRemove()}>Remove</p>
            </div>
        </div>
    );
};

export default MenuItems;
