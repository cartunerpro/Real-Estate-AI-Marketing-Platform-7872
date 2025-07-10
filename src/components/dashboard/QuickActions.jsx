import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiPlus,
  FiBarChart3,
  FiGlobe,
  FiUpload,
  FiSettings,
  FiArrowRight,
} = FiIcons;

const QuickActions = () => {
  const actions = [
    {
      title: 'Create Market Report',
      description: 'Generate a new AI-powered market report',
      icon: FiBarChart3,
      href: '/app/market-reports/create',
      color: 'bg-blue-500',
    },
    {
      title: 'Build Micro Site',
      description: 'Create a property micro-site in minutes',
      icon: FiGlobe,
      href: '/app/micro-sites/create',
      color: 'bg-green-500',
    },
    {
      title: 'Upload Client List',
      description: 'Import contacts for report distribution',
      icon: FiUpload,
      href: '/app/agent-portal/clients',
      color: 'bg-purple-500',
    },
    {
      title: 'Configure Settings',
      description: 'Customize your branding and preferences',
      icon: FiSettings,
      href: '/app/settings',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h2>
        <SafeIcon icon={FiPlus} className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={action.href}
              className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                <SafeIcon icon={action.icon} className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {action.description}
                </p>
              </div>
              <SafeIcon 
                icon={FiArrowRight} 
                className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" 
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;