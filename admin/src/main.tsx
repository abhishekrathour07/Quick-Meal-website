import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar.tsx';
import Sidebar from './components/AppSidebar.tsx';

function RootComponent() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <div className="flex gap-4 bg-slate-200 bg-[url('/background.png')] h-[91vh]">
          <div className={`${isMinimized ? 'w-16' : 'w-16 lg:w-72'}`}>
            <Sidebar isMinimized={isMinimized} toggleSidebar={toggleSidebar} />
          </div>
          <div className={`${isMinimized ? 'w-[94vw]' : 'w-[79vw]'}`}>
            <App />
          </div>
        </div>
        <Toaster />
      </BrowserRouter>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<RootComponent />);
