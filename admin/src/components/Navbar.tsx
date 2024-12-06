import { User } from 'lucide-react'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className='bg-slate-900 h-16 flex justify-between items-center text-white px-8'>
            <a href="/">
                <img src="/logo.png" alt="Logo" className='h-12 cursor-pointer' />
            </a>
            <div className='flex justify-between w-[50vh]'>
                <p>Veg</p>
                <p>Non - Veg</p>
                <User />

            </div>
        </div>
    )
}

export default Navbar
