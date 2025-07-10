import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useTenant } from '../../contexts/TenantContext';
import * as FiIcons from 'react-icons/fi';

const {
  FiHome,
  FiBarChart3,
  FiGlobe,
  FiUsers,
  FiSettings,
  FiCreditCard,
  FiShield,
  FiX,
  FiTrendingUp,
  FiMap,
} = FiIcons;

const Sidebar = ({ onClose }) => {
  const { user } = useAuth();
  const { currentTenant } = useTenant();
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/app/dashboard',
      icon: FiHome,
      roles: ['admin', 'agent', 'user'],
    },
    {
      name: 'Market Reports',
      href: '/app/market-reports',
      icon: FiBarChart3,
      roles: ['admin', 'agent'],
    },
    {
      name: 'Micro Sites',
      href: '/app/micro-sites',
      icon: FiGlobe,
      roles: ['admin', 'agent'],
    },
    {
      name: 'Agent Portal',
      href: '/app/agent-portal',
      icon: FiUsers,
      roles: ['admin', 'agent'],
    },
    {
      name: 'Admin Console',
      href: '/app/admin',
      icon: FiShield,
      roles: ['admin'],
    },
    {
      name: 'Billing',
      href: '/app/billing',
      icon: FiCreditCard,
      roles: ['admin', 'agent'],
    },
    {
      name: 'Settings',
      href: '/app/settings',
      icon: FiSettings,
      roles: ['admin', 'agent', 'user'],
    },
  ];

  const filteredNavigation = navigationItems.filter(item =>
    item.roles.includes(user?.role || 'user')
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {currentTenant?.name || 'RealEstate AI'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currentTenant?.plan || 'Free Plan'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <SafeIcon icon={FiX} className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {filteredNavigation.map((item) => {
          const isActive = location.pathname.startsWith(item.href);
          
          return (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`
              }
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary-100 dark:bg-primary-900 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              <SafeIcon icon={item.icon} className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {user?.name?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;