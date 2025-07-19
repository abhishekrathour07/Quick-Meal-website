import { Route, Routes, Navigate } from 'react-router-dom'
import Order from './pages/Orders/Order'
import FoodList from './pages/food-items/FoodList'
import Setting from './pages/setting/Setting'
import AddItems from './pages/additem/AddItems'
import Dashboard from './pages/Dashboard/Dashboard'
import FAQ from './pages/FAQ/faq'
import CustomerFeedback from './pages/Feedback/Feedback'
import TrackOrder from './pages/Track Order/TrackOrder'
import Reports from './pages/Reports/Report'
import KanbanBoard from './pages/taskTracker/KanbanBoard'
import Login from './pages/login/Login'
import Signup from './pages/signup/SignUp'
import OrderDetail from './pages/Orders/OrderDetail'


const App = () => {
  const url = import.meta.env.VITE_API_URL || "http://localhost:3005";
  return (
    <Routes>
      {/* Redirect from the root to login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/api/food/add' element={<AddItems url={url} />} />
      <Route path='/api/order-summary' element={<Order />} />
      <Route path='/api/food/list' element={<FoodList url={url} />} />
      <Route path='/api/settings' element={< Setting />} />
      <Route path='/api/faq' element={< FAQ />} />
      <Route path='/api/feedback' element={< CustomerFeedback />} />
      <Route path='/api/track-order' element={< TrackOrder />} />
      <Route path='/api/reports' element={< Reports />} />
      <Route path='/api/tasks' element={<KanbanBoard />} />
      <Route path="/order-detail/:id" element={<OrderDetail />} />
      
    </Routes>
  )
}

export default App
