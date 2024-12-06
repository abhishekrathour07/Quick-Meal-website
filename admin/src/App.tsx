import { Route, Routes } from 'react-router-dom'
import Order from './pages/Orders/Order'
import FoodList from './pages/food-items/FoodList'
import Setting from './pages/setting/Setting'
import AddItems from './pages/additem/AddItems'
import Dashboard from './pages/Dashboard/Dashboard'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/auth/food/add' element={<AddItems />} />
      <Route path='/admin/orders' element={<Order />} />
      <Route path='//auth/food/list' element={<FoodList />} />
      <Route path='/auth/settings' element={< Setting />} />

    </Routes>
  )
}

export default App
