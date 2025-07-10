import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { useTenant } from '../../contexts/TenantContext';
import SafeIcon from '../../components/common/SafeIcon';
import DashboardStats from '../../components/dashboard/DashboardStats';
import RecentActivity from '../../components/dashboard/RecentActivity';
import QuickActions from '../../components/dashboard/QuickActions';
import PerformanceChart from '../../components/dashboard/PerformanceChart';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp } = FiIcons;

const DashboardPage = () => {
  const { user } = useAuth();
  const { currentTenant } = useTenant();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              {getGreeting()}, {user?.name || 'User'}! 👋
            </motion.h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back to your {currentTenant?.name || 'RealEstate AI'} dashboard
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </div>
  );
};

export default DashboardPage;