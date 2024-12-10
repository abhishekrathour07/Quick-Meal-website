import { Search, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cartcontext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>('');

  const { cart } = useCart();
  console.log(cart.length);


  const handleMenuClick = (menu: string, route: string) => {
    setActiveMenu(menu);
    navigate(route);
  };

  return (
    <div className='text-xl bg-slate-900 text-white flex justify-between px-8 items-center h-16 shadow-lg'>
      <a href="/">
        <img src="/images/logo.png" alt="Logo" className='h-12 cursor-pointer' />
      </a>

      <ul className='md:flex gap-8 hidden'>
        <li
          className={`cursor-pointer hover:text-orange-500 ${activeMenu === 'home' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('home', '/')}
        >
          Home
        </li>
        <li
          className={`cursor-pointer hover:text-orange-500 ${activeMenu === 'chinese' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('chinese', '/chinease')}
        >
          Chinese
        </li>
        <li
          className={`cursor-pointer hover:text-orange-500 ${activeMenu === 'north-indian' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('north-indian', '/north-indian')}
        >
          North Indian
        </li>
        <li
          className={`cursor-pointer hover:text-orange-500 ${activeMenu === 'south-indian' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('south-indian', '/south-indian')}
        >
          South Indian
        </li>
      </ul>

      <ul className='flex gap-6 cursor-pointer'>
        <li>
          <Search className='hover:text-orange-500' />
        </li>
        <li
          className={`cursor-pointer hover:text-orange-500 relative ${activeMenu === 'cart' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('cart', '/cart')}
        >
          <ShoppingCart />
          {cart.length === 0 ? "" :
            <div className=' h-5 w-5 p-2 rounded-full bg-red-600 absolute bottom-3 left-3 text-white flex justify-center items-center text-sm font-semibold'>{cart.length}</div>
          }

        </li>
        <li
          className={`cursor-pointer hover:text-orange-500 ${activeMenu === 'login' ? 'text-orange-500' : ''
            }`}
          onClick={() => handleMenuClick('login', '/login')}
        >
          <User />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
