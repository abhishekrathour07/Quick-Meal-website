import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NorthIndian from './pages/north-indian/NorthIndian'
import SouthIndian from './pages/south-indian/SouthIndian'
import Address from './pages/address/Address'
import Cart from './pages/cart/Cart'
import Chinease from './pages/chinease/Chinease'
import Signup from './pages/signup/SignUp'
import Login from './pages/login/Login'

const App: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/address' element={<Address />} />
            <Route path='/chinease' element={<Chinease />} />
            <Route path='/north-indian' element={<NorthIndian />} />
            <Route path='/south-indian' element={<SouthIndian />} />
            <Route path='/delhi' element={<SouthIndian />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default App
