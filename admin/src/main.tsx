import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar.tsx';
import Sidebar from './components/AppSidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='flex gap-4 bg-slate-950'>
        <Sidebar />
        <App />
      </div>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
