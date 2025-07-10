import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {
  FiCreditCard,
  FiDownload,
  FiCheck,
  FiX,
  FiCalendar,
  FiDollarSign,
  FiTrendingUp,
  FiUsers,
  FiBarChart3,
  FiGlobe,
} = FiIcons;

const BillingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 29, yearly: 290 },
      features: [
        'Up to 5 market reports',
        '10 micro-sites per month',
        'Basic AI narratives',
        'Email support',
        'Standard templates',
        '1,000 report recipients',
      ],
      limits: {
        reports: 5,
        sites: 10,
        recipients: 1000,
      },
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Unlimited market reports',
        'Unlimited micro-sites',
        'Advanced AI features',
        'Priority support',
        'Custom branding',
        'Analytics dashboard',
        'API access',
        'Unlimited recipients',
      ],
      limits: {
        reports: 'Unlimited',
        sites: 'Unlimited',
        recipients: 'Unlimited',
      },
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 299, yearly: 2990 },
      features: [
        'Everything in Professional',
        'Multi-tenant management',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
        'Advanced security',
        'Custom development',
        'White-label options',
      ],
      limits: {
        reports: 'Unlimited',
        sites: 'Unlimited',
        recipients: 'Unlimited',
      },
    },
  ];

  const currentUsage = {
    reports: 8,
    sites: 15,
    recipients: 450,
  };

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      amount: 99.00,
      status: 'paid',
      plan: 'Professional',
      period: 'Jan 2024',
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: 99.00,
      status: 'paid',
      plan: 'Professional',
      period: 'Dec 2023',
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-01',
      amount: 99.00,
      status: 'paid',
      plan: 'Professional',
      period: 'Nov 2023',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Billing & Subscription
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your subscription and billing information
        </p>
      </div>

      {/* Current Plan & Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Current Plan
            </h2>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Professional Plan
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Billed monthly • Next billing: Feb 1, 2024
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  $99<span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiBarChart3} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reports</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {currentUsage.reports}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiGlobe} className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sites</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {currentUsage.sites}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recipients</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {currentUsage.recipients}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
                Change Plan
              </button>
              <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Payment Method
          </h2>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiCreditCard} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                •••• •••• •••• 4242
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expires 12/25
              </p>
            </div>
          </div>
          <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            Update Payment Method
          </button>
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Available Plans
          </h2>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`border-2 rounded-lg p-6 relative ${
                plan.popular
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current Plan
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                disabled={plan.popular}
              >
                {plan.popular ? 'Current Plan' : 'Upgrade'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Billing History
          </h2>
          <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {invoice.id}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {invoice.plan} - {invoice.period}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      {new Date(invoice.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                      <SafeIcon icon={FiDollarSign} className="w-4 h-4 mr-1" />
                      ${invoice.amount.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <SafeIcon icon={FiDownload} className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;