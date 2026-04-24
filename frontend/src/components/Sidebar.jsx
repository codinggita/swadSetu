import React from 'react';
import { Compass, FileText, CheckSquare, Heart, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Explore', icon: <Compass size={18} />, path: '/explore' },
    { name: 'Orders', icon: <FileText size={18} />, path: '/orders' },
    { name: 'Subscriptions', icon: <CheckSquare size={18} />, path: '/centers' },
    { name: 'Favorites', icon: <Heart size={18} />, path: '/favorites' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-[#F8F8F8] border-r border-border h-[calc(100vh-64px)] p-6 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <div className="text-[10px] uppercase font-bold text-text-muted tracking-widest mb-1">Modern Professional</div>
        </div>
        
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-2.5 rounded transition-all relative ${
                  isActive 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-text-muted hover:text-text-dark hover:bg-black/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'text-primary' : 'text-text-muted'}>{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary rounded-l-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="bg-[#1C1C1C] rounded-lg p-5 text-white">
        <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-2">Premium Member</div>
        <p className="text-[11px] text-white/60 leading-relaxed mb-4">
          Unlock exclusive weekend artisan menus.
        </p>
        <button className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded font-bold text-xs transition-colors">
          Upgrade Plan
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
