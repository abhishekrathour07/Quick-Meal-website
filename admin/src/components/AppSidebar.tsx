import { LayoutDashboard, List, LogOut, PanelLeftClose, PanelLeftOpen, PlusCircle, Settings, ShoppingBag } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";


type props = {
  isMinimized: boolean,
  toggleSidebar: () => void
}
const Sidebar: React.FC<props> = ({isMinimized,toggleSidebar}) => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />
    },
    {
      name: "Orders",
      path: "/api/order-summary",
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

  // const [isMinimized, setIsMinimized] = useState(false);
  // const toggleSidebar = () => {
  //   setIsMinimized((prev) => !prev);
  // };

  return (
    <div
      className={`flex flex-col h-[91vh] justify-center p-2 text-white bg-slate-950 transition-all duration-300 z-50 ${isMinimized ? "w-16" : "w-16  lg:w-72"}`}>

      <div className="flex items-center gap-4 px-2 mt-9 border-b border-gray-700 ">
        <div className={`text-xl md:text-2xl font-bold ${isMinimized ? "hidden" : "lg:block hidden"}`}>
          Quick Meal Admin
        </div>
        <button
          onClick={toggleSidebar}
          className="text-xl flex justify-center items-center  py-4" >
          {isMinimized ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 w-full">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 mt-2 rounded-lg bg-slate-950 ${isActive ? " text-orange-600" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            {!isMinimized && <span className="ml-3 hidden lg:block">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-700">
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
