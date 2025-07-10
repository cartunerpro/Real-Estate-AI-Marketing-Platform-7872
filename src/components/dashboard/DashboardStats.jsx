import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiBarChart3,
  FiGlobe,
  FiUsers,
  FiTrendingUp,
  FiArrowUp,
  FiArrowDown,
} = FiIcons;

const DashboardStats = () => {
  const stats = [
    {
      name: 'Active Reports',
      value: '12',
      change: '+2.5%',
      changeType: 'positive',
      icon: FiBarChart3,
      color: 'bg-blue-500',
    },
    {
      name: 'Micro Sites',
      value: '8',
      change: '+12%',
      changeType: 'positive',
      icon: FiGlobe,
      color: 'bg-green-500',
    },
    {
      name: 'Leads Generated',
      value: '34',
      change: '+8.2%',
      changeType: 'positive',
      icon: FiUsers,
      color: 'bg-purple-500',
    },
    {
      name: 'Conversion Rate',
      value: '18.5%',
      change: '-2.1%',
      changeType: 'negative',
      icon: FiTrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.name}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stat.value}
              </p>
            </div>
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="mt-4 flex items-center">
            <div className={`flex items-center ${
              stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <SafeIcon 
                icon={stat.changeType === 'positive' ? FiArrowUp : FiArrowDown} 
                className="w-4 h-4 mr-1" 
              />
              <span className="text-sm font-medium">{stat.change}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              from last month
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;