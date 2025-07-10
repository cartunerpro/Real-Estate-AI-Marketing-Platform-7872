import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers } = FiIcons;

const AgentPortalPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Agent Portal
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your clients and marketing activities
          </p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <SafeIcon icon={FiUsers} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Agent Portal Coming Soon
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              This feature is currently under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPortalPage;