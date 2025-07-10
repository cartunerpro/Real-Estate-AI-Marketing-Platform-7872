import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const PerformanceChart = () => {
  const { theme } = useTheme();

  const chartData = {
    reports: [12, 15, 18, 22, 19, 25, 28, 30, 27, 32, 35, 38],
    leads: [45, 52, 48, 61, 55, 67, 73, 69, 75, 82, 88, 94],
    conversions: [8, 12, 10, 15, 13, 18, 22, 19, 25, 28, 31, 35],
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Performance Overview
      </h2>
      
      {/* Simple chart placeholder */}
      <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Performance Chart
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Chart visualization coming soon
          </p>
        </div>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">38</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Reports</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">94</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Leads</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">35</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Conversions</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceChart;