import React from 'react';
import { User, Bell, ShoppingBag, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardHeader = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Subscriptions', path: '/centers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'History', path: '/history' },
  ];

  return (
    <header className="h-16 bg-[#1A1A1A] text-white flex items-center justify-between px-8 w-full z-20">
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xl font-bold tracking-tighter">swadSetu</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-xs font-semibold transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 flex-1 justify-end max-w-[800px]">
        <div className="relative w-full max-w-[300px] hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
          <input 
            type="text" 
            placeholder="Search kitchens..." 
            className="w-full bg-[#2A2A2A] border border-white/5 rounded-md py-2 pl-10 pr-4 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-md font-bold text-xs transition-colors hidden sm:block">
            Order Now
          </button>
          
          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-5">
            <button className="text-white/60 hover:text-white transition-colors relative">
              <Bell size={18} />
              <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full"></div>
            </button>
            <button className="text-white/60 hover:text-white transition-colors">
              <ShoppingBag size={18} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 ml-1">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
