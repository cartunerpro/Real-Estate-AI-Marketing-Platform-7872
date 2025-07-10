import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiPlus,
  FiGlobe,
  FiEye,
  FiUsers,
  FiTrendingUp,
  FiExternalLink,
  FiCopy,
  FiMoreVertical,
  FiSearch,
  FiFilter,
} = FiIcons;

const MicroSitesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const sites = [
    {
      id: 1,
      title: 'Luxury Condo in Downtown Seattle',
      address: '123 Main St, Seattle, WA 98101',
      price: '$1,250,000',
      status: 'published',
      url: 'https://123-main-st.microsites.com',
      views: 1247,
      leads: 23,
      createdAt: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Family Home in Bellevue',
      address: '456 Oak Ave, Bellevue, WA 98004',
      price: '$2,100,000',
      status: 'draft',
      url: null,
      views: 0,
      leads: 0,
      createdAt: '2024-01-12',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Charming Townhouse in Capitol Hill',
      address: '789 Pine St, Seattle, WA 98102',
      price: '$850,000',
      status: 'published',
      url: 'https://789-pine-st.microsites.com',
      views: 892,
      leads: 18,
      createdAt: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Executive Home in Redmond',
      address: '321 Cedar Dr, Redmond, WA 98052',
      price: '$1,750,000',
      status: 'published',
      url: 'https://321-cedar-dr.microsites.com',
      views: 1564,
      leads: 31,
      createdAt: '2024-01-08',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredSites = sites.filter(site => {
    const matchesSearch = site.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || site.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Property Micro Sites
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Create beautiful property websites in minutes
          </p>
        </div>
        <Link
          to="/app/micro-sites/create"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
        >
          <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
          Create Site
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search sites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiFilter} className="w-5 h-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSites.map((site, index) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
              <img
                src={site.image}
                alt={site.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(site.status)}`}>
                  {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <button className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                  <SafeIcon icon={FiMoreVertical} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {site.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {site.address}
                  </p>
                  <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                    {site.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <SafeIcon icon={FiEye} className="w-4 h-4 mr-1" />
                    <span>{site.views}</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiUsers} className="w-4 h-4 mr-1" />
                    <span>{site.leads}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(site.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {site.url ? (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => copyToClipboard(site.url)}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      title="Copy URL"
                    >
                      <SafeIcon icon={FiCopy} className="w-4 h-4" />
                    </button>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                      title="View Site"
                    >
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Not published
                  </span>
                )}
                
                <Link
                  to={`/app/micro-sites/${site.id}`}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredSites.length === 0 && (
        <div className="text-center py-12">
          <SafeIcon icon={FiGlobe} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No micro sites found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first property micro site.'
            }
          </p>
          {!searchTerm && statusFilter === 'all' && (
            <Link
              to="/app/micro-sites/create"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
              Create Your First Site
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MicroSitesList;