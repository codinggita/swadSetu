import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API_URL } from '../services/api';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Truck, 
  Settings, 
  HelpCircle,
  User
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, path: '/dashboard' },
    { name: 'Meal Plans', icon: <UtensilsCrossed className="w-5 h-5" />, path: '/meal-plans' },
    { name: 'Deliveries', icon: <Truck className="w-5 h-5" />, path: '/deliveries' },
    { name: 'Profile', icon: <User className="w-5 h-5" />, path: '/profile' },
    { name: 'Preferences', icon: <Settings className="w-5 h-5" />, path: '/preferences' },
    { name: 'Support', icon: <HelpCircle className="w-5 h-5" />, path: '/support' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-[#0a0a0a] border-r border-gray-100 dark:border-gray-800 min-h-screen p-6 flex flex-col transition-colors duration-300">
      <div className="mb-10">
        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Navigation</h3>
        <p className="text-xs text-gray-500 font-medium -mt-3 mb-6">Manage your meals</p>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all relative ${
                isActive 
                ? 'text-orange-500 bg-orange-50 dark:bg-orange-500/10 font-bold' 
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 font-medium'
              }`}
            >
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-500 rounded-l-full"></div>
              )}
              <span className={isActive ? 'text-orange-500' : 'text-gray-400'}>
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
        <Link to="/profile" className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all group">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white overflow-hidden ring-2 ring-transparent group-hover:ring-orange-500/20 transition-all">
            {userInfo?.profileImage ? (
              <img src={`${API_URL}/api${userInfo.profileImage}`} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{userInfo?.name || 'Guest User'}</p>
            <p className="text-[10px] text-gray-500 font-medium truncate">Premium Member</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
