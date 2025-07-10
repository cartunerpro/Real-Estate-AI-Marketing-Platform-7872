import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiActivity,
  FiBarChart3,
  FiGlobe,
  FiMail,
  FiUsers,
  FiClock,
} = FiIcons;

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'report_generated',
      title: 'Market Report Generated',
      description: 'Downtown Seattle Q4 2024 report completed',
      time: '2 hours ago',
      icon: FiBarChart3,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      type: 'site_created',
      title: 'Micro Site Created',
      description: '123 Main St property site published',
      time: '4 hours ago',
      icon: FiGlobe,
      color: 'bg-green-500',
    },
    {
      id: 3,
      type: 'email_sent',
      title: 'Email Campaign Sent',
      description: 'Weekly market update sent to 245 contacts',
      time: '1 day ago',
      icon: FiMail,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      type: 'lead_generated',
      title: 'New Lead Generated',
      description: 'Contact form submission from micro site',
      time: '2 days ago',
      icon: FiUsers,
      color: 'bg-orange-500',
    },
    {
      id: 5,
      type: 'report_scheduled',
      title: 'Report Scheduled',
      description: 'Bellevue market report scheduled for next week',
      time: '3 days ago',
      icon: FiClock,
      color: 'bg-gray-500',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <SafeIcon icon={FiActivity} className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
              <SafeIcon icon={activity.icon} className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;