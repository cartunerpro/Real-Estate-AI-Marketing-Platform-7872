import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LoadingSpinner from '../common/LoadingSpinner';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiCalendar, FiMapPin, FiDownload, FiMail, FiEye, FiShare2 } = FiIcons;

const MarketReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/app/market-reports')}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Downtown Seattle Market Report
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
              <span>Seattle, WA 98101</span>
              <span className="mx-2">•</span>
              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
              <span>Q1 2024</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <SafeIcon icon={FiDownload} className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <SafeIcon icon={FiMail} className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            <SafeIcon icon={FiShare2} className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Report Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Report Preview
          </h2>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <SafeIcon icon={FiEye} className="w-4 h-4 mr-1" />
            <span>156 views</span>
          </div>
        </div>
        
        <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Report preview content will appear here</p>
        </div>
      </div>
      
      {/* Distribution Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Distribution Statistics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Recipients</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">245</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Opens</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">63.7% open rate</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Clicks</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">57.1% click-through rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReportDetail;