import React, { useState } from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import { MenuItem } from "../assets/frontend_assets/assets";
import MenuItems from "./MenuItems";
import { useCart } from "../context/Cartcontext";

const MenuCards: React.FC = () => {
    const [filterFoodCategory, setFilterFoodCategory] = useState("All");
    const [activeMenu, setActiveMenu] = useState<string>('');

    const { food_list } = useCart()
    const filterFoodData =
        filterFoodCategory === "All"
            ? food_list
            : food_list.filter((foodData) => foodData.category === filterFoodCategory);

    const handleMenuClick = (menuName: string) => {
        if (activeMenu === menuName) {
            setFilterFoodCategory("All");
            setActiveMenu("");
        } else {
            setFilterFoodCategory(menuName);
            setActiveMenu(menuName);
        }
    };
    return (
        <div>
            <div
                className="flex gap-4 items-center overflow-x-auto scrollbar-hide scroll-smooth" >
                {menu_list.map((item: MenuItem) => (
                    <div
                        key={item.menu_name} // Using menu_name as a unique key
                        className="flex flex-col items-center justify-center cursor-pointer h-64 min-w-36 transition-transform duration-300 ease-in-out hover:scale-105"
                        onClick={() => handleMenuClick(item.menu_name)} // Handle category change and active state
                    >
                        <img
                            src={item.menu_image}
                            alt={item.menu_name}
                            className={`h-40 w-40 border-2 rounded-full transition-all duration-300 ${activeMenu === item.menu_name ? "border-4 border-orange-600" : "border-4 border-transparent"
                                }`}
                        />
                        <p className="text-lg mt-2">{item.menu_name}</p>
                    </div>
                ))}
            </div>

            <h2 className='text-xl md:text-3xl font-semibold'>Top dishes near you</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">

                {filterFoodData.map((food) => (
                    <MenuItems
                        key={food._id}
                        name={food.name}
                        description={food.description}
                        image={`http://localhost:3005/uploads/${food.image}`}
                        price={food.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuCards;
