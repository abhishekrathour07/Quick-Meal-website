import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { CartProvider } from './context/Cartcontext'

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <CartProvider>
        <Navbar />
        <App />
      </CartProvider>
    </StrictMode>
  </Router>
)
