import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LoadingSpinner from '../common/LoadingSpinner';
import * as FiIcons from 'react-icons/fi';

const {
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiMail,
  FiSettings,
  FiSave,
  FiSend,
  FiEye,
  FiPlus,
  FiX,
} = FiIcons;

const CreateMarketReport = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    area: '',
    zipCodes: [],
    description: '',
    frequency: 'weekly',
    recipients: [],
    template: 'modern',
    aiNarrative: true,
    includeCharts: true,
    includeComparisons: true,
    brandingEnabled: true,
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Report details and area' },
    { id: 2, title: 'Data Sources', description: 'Configure data and metrics' },
    { id: 3, title: 'Recipients', description: 'Set up distribution list' },
    { id: 4, title: 'Template', description: 'Choose design and branding' },
    { id: 5, title: 'Review', description: 'Preview and publish' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const addZipCode = (zipCode) => {
    if (zipCode && !formData.zipCodes.includes(zipCode)) {
      setFormData(prev => ({
        ...prev,
        zipCodes: [...prev.zipCodes, zipCode],
      }));
    }
  };

  const removeZipCode = (zipCode) => {
    setFormData(prev => ({
      ...prev,
      zipCodes: prev.zipCodes.filter(code => code !== zipCode),
    }));
  };

  const handleSubmit = async (action) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (action === 'save') {
        // Save as draft
        console.log('Saving as draft:', formData);
        navigate('/app/market-reports');
      } else if (action === 'publish') {
        // Publish immediately
        console.log('Publishing report:', formData);
        navigate('/app/market-reports');
      }
    } catch (error) {
      console.error('Error creating report:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Report Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Downtown Seattle Market Report"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                placeholder="e.g., Seattle, WA"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ZIP Codes
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.zipCodes.map(zipCode => (
                  <span
                    key={zipCode}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {zipCode}
                    <button
                      type="button"
                      onClick={() => removeZipCode(zipCode)}
                      className="ml-1 text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
                    >
                      <SafeIcon icon={FiX} className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Enter ZIP code and press Enter"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addZipCode(e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                placeholder="Brief description of the market report..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Report Frequency
              </label>
              <select
                name="frequency"
                value={formData.frequency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="one-time">One-time</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Data & Features
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="aiNarrative"
                    checked={formData.aiNarrative}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    AI-Generated Market Narrative
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="includeCharts"
                    checked={formData.includeCharts}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Price & Inventory Charts
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="includeComparisons"
                    checked={formData.includeComparisons}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Neighborhood Comparisons
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="brandingEnabled"
                    checked={formData.brandingEnabled}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    Include Custom Branding
                  </span>
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Distribution List
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Choose who will receive this market report.
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Upload Contact List
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Upload a CSV file with your contacts
                  </p>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Choose File
                  </button>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Select from Existing Lists
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        All Clients (245 contacts)
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        Seattle Area Clients (156 contacts)
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                        VIP Clients (32 contacts)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Choose Template
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['modern', 'classic', 'minimal', 'professional'].map(template => (
                  <div
                    key={template}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.template === template
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, template }))}
                  >
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded mb-3"></div>
                    <h4 className="font-medium text-gray-900 dark:text-white capitalize">
                      {template}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {template === 'modern' && 'Clean, contemporary design with bold charts'}
                      {template === 'classic' && 'Traditional layout with elegant typography'}
                      {template === 'minimal' && 'Simple, focused design with key metrics'}
                      {template === 'professional' && 'Corporate-style layout with detailed analysis'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Review & Publish
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Title</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{formData.title}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Area</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{formData.area}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">ZIP Codes</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {formData.zipCodes.join(', ') || 'None specified'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Frequency</dt>
                    <dd className="text-sm text-gray-900 dark:text-white capitalize">{formData.frequency}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Template</dt>
                    <dd className="text-sm text-gray-900 dark:text-white capitalize">{formData.template}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Features</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {[
                        formData.aiNarrative && 'AI Narrative',
                        formData.includeCharts && 'Charts',
                        formData.includeComparisons && 'Comparisons',
                        formData.brandingEnabled && 'Branding',
                      ].filter(Boolean).join(', ')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              Create Market Report
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Step {currentStep} of {steps.length}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= step.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}>
                {step.id}
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${
                  currentStep >= step.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${
                  currentStep > step.id
                    ? 'bg-primary-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
      >
        {renderStep()}
      </motion.div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <div className="flex items-center space-x-3">
          {currentStep === steps.length ? (
            <>
              <button
                onClick={() => handleSubmit('save')}
                disabled={loading}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 flex items-center"
              >
                {loading ? <LoadingSpinner size="sm" className="mr-2" /> : <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />}
                Save as Draft
              </button>
              <button
                onClick={() => handleSubmit('publish')}
                disabled={loading}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 flex items-center"
              >
                {loading ? <LoadingSpinner size="sm" className="mr-2" /> : <SafeIcon icon={FiSend} className="w-4 h-4 mr-2" />}
                Publish Report
              </button>
            </>
          ) : (
            <button
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateMarketReport;