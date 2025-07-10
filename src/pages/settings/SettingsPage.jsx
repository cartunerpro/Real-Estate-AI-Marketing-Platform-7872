import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSettings } = FiIcons;

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your account and application settings
          </p>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <SafeIcon icon={FiSettings} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Settings Page Coming Soon
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Settings configuration is currently under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;