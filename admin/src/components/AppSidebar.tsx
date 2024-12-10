import { LayoutDashboard, List, LogOut, PanelLeftClose, PanelLeftOpen, PlusCircle, Settings, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard />
    },
    {
      name: "Orders",
      path: "/api/orders",
      icon: <ShoppingBag />
    },
    {
      name: "Add Item",
      path: "/api/food/add",
      icon: <PlusCircle />
    },
    {
      name: "Food List",
      path: "/api/food/list",
      icon: <List />
    },
    {
      name: "Settings",
      path: "/api/settings",
      icon: <Settings />
    },
  ];

  const [isMinimized, setIsMinimized] = useState(false);
  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col h-[92vh]   text-white bg-slate-900 transition-all duration-300 z-50 ${isMinimized ? "w-20" : "w-20  lg:w-80 xl:w-96"}`}>

      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className={`text-xl md:text-2xl font-bold ${isMinimized ? "hidden" : "lg:block hidden"}`}>
          Quick Meal Admin
        </div>
        <button
          onClick={toggleSidebar}
          className="text-xl p-2 hover:bg-slate-800 rounded-xl" >
          {isMinimized ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 ">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-3 mt-2 rounded-lg hover:bg-slate-800 ${isActive ? "bg-slate-800 text-green-400" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!isMinimized && <span className="ml-3 hidden lg:block">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full p-4 text-left text-sm font-medium"
          onClick={() => alert("Logging out...")}
        >
          <p className="flex gap-4 rounded-lg"><span className="hover:text-red-500"><LogOut /></span><span className={`${isMinimized ? 'hidden' : 'hidden lg:block'}`}> Log Out </span></p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
