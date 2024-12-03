import React from 'react'
import MenuCards from './MenuCards'

const Menu: React.FC = () => {
  return (
    <div className='mt-4 px-3 md:px-20'>
      <h2 className='text-xl md:text-3xl font-semibold'>Explore Our Menu</h2>
      <MenuCards />
    </div>
  )
}

export default Menu
