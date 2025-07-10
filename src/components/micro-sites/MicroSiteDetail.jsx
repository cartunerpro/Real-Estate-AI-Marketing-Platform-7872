import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LoadingSpinner from '../common/LoadingSpinner';
import * as FiIcons from 'react-icons/fi';

const {
  FiArrowLeft,
  FiHome,
  FiMapPin,
  FiDollarSign,
  FiMaximize,
  FiEdit,
  FiTrash2,
  FiExternalLink,
  FiCopy,
  FiUsers,
  FiEye,
  FiCheck
} = FiIcons;

const MicroSiteDetail = () => {
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/app/micro-sites')}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Luxury Condo in Downtown Seattle
            </h1>
            <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
              <span>123 Main St, Seattle, WA 98101</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
            <SafeIcon icon={FiEdit} className="w-4 h-4 mr-2" />
            Edit Site
          </button>
        </div>
      </div>
      
      {/* Site Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
                alt="Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 rounded-full p-3">
                  <SafeIcon icon={FiMaximize} className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  $1,250,000
                </h2>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 mr-4">3 beds</span>
                  <span className="text-gray-600 dark:text-gray-400 mr-4">2 baths</span>
                  <span className="text-gray-600 dark:text-gray-400">1,850 sqft</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Stunning luxury condo in the heart of downtown Seattle with breathtaking views of the city skyline and Puget Sound. This modern unit features high-end finishes, floor-to-ceiling windows, and an open concept layout perfect for entertaining.
              </p>
              
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Property Features
              </h3>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Air Conditioning', 'Fireplace', 'Balcony', 'Gym', 'Garage', 'Security System', 'Elevator', 'Washer/Dryer'].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Site Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Published
                  </span>
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">URL</p>
                <div className="flex items-center">
                  <a
                    href="https://123-main-st.microsites.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium truncate mr-2"
                  >
                    123-main-st.microsites.com
                  </a>
                  
                  <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md">
                    <SafeIcon icon={FiCopy} className="w-4 h-4" />
                  </button>
                  
                  <a
                    href="https://123-main-st.microsites.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md ml-1"
                  >
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Created</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  Jan 15, 2024
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Template</p>
                <p className="font-medium text-gray-900 dark:text-white capitalize">
                  Modern
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Performance
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <SafeIcon icon={FiEye} className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Views</p>
                    <p className="font-medium text-gray-900 dark:text-white">1,247</p>
                  </div>
                </div>
                <span className="text-xs text-green-600 dark:text-green-400">+12%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Leads</p>
                    <p className="font-medium text-gray-900 dark:text-white">23</p>
                  </div>
                </div>
                <span className="text-xs text-green-600 dark:text-green-400">+5%</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
                View detailed analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSiteDetail;