import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiPlus,
  FiBarChart3,
  FiCalendar,
  FiMail,
  FiEye,
  FiDownload,
  FiMoreVertical,
  FiSearch,
  FiFilter,
} = FiIcons;

const MarketReportsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const reports = [
    {
      id: 1,
      title: 'Downtown Seattle Market Report',
      area: 'Seattle, WA 98101',
      status: 'published',
      createdAt: '2024-01-15',
      lastSent: '2024-01-15',
      recipients: 245,
      opens: 156,
      clicks: 89,
      preview: 'https://example.com/preview/1',
    },
    {
      id: 2,
      title: 'Bellevue Luxury Market Analysis',
      area: 'Bellevue, WA 98004',
      status: 'draft',
      createdAt: '2024-01-12',
      lastSent: null,
      recipients: 0,
      opens: 0,
      clicks: 0,
      preview: null,
    },
    {
      id: 3,
      title: 'Capitol Hill Neighborhood Report',
      area: 'Seattle, WA 98102',
      status: 'scheduled',
      createdAt: '2024-01-10',
      lastSent: null,
      recipients: 178,
      opens: 0,
      clicks: 0,
      preview: 'https://example.com/preview/3',
    },
    {
      id: 4,
      title: 'Redmond Tech Corridor Analysis',
      area: 'Redmond, WA 98052',
      status: 'published',
      createdAt: '2024-01-08',
      lastSent: '2024-01-08',
      recipients: 312,
      opens: 198,
      clicks: 145,
      preview: 'https://example.com/preview/4',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      case 'scheduled': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Market Reports
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Create and manage AI-powered neighborhood market reports
          </p>
        </div>
        <Link
          to="/app/market-reports/create"
          className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
        >
          <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
          Create Report
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
                placeholder="Search reports..."
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
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Report
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredReports.map((report, index) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                        <SafeIcon icon={FiBarChart3} className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {report.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {report.area}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {report.recipients > 0 ? (
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-400 mr-1" />
                            <span>{report.recipients} sent</span>
                          </div>
                          <div className="flex items-center">
                            <SafeIcon icon={FiEye} className="w-4 h-4 text-gray-400 mr-1" />
                            <span>{report.opens} opens</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-500 dark:text-gray-400">Not sent</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      {new Date(report.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      {report.preview && (
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                          <SafeIcon icon={FiEye} className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <SafeIcon icon={FiDownload} className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <SafeIcon icon={FiBarChart3} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No reports found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by creating your first market report.'
            }
          </p>
          {!searchTerm && statusFilter === 'all' && (
            <Link
              to="/app/market-reports/create"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
              Create Your First Report
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MarketReportsList;