import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import LoadingSpinner from '../common/LoadingSpinner';
import * as FiIcons from 'react-icons/fi';

const { 
  FiArrowLeft, FiHome, FiMapPin, FiDollarSign, FiImage, 
  FiList, FiGrid, FiSave, FiEye, FiCheck
} = FiIcons;

const CreateMicroSite = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    price: '',
    description: '',
    beds: 3,
    baths: 2,
    sqft: 1800,
    images: [],
    features: [],
    template: 'modern',
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Property details' },
    { id: 2, title: 'Media', description: 'Images and videos' },
    { id: 3, title: 'Features', description: 'Property features and amenities' },
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

  const handleSubmit = async (action) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (action === 'save') {
        // Save as draft
        console.log('Saving as draft:', formData);
        navigate('/app/micro-sites');
      } else if (action === 'publish') {
        // Publish immediately
        console.log('Publishing site:', formData);
        navigate('/app/micro-sites');
      }
    } catch (error) {
      console.error('Error creating site:', error);
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
                Property Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Luxury Condo in Downtown Seattle"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="e.g., 123 Main St, Seattle, WA 98101"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Listing Price
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g., $1,250,000"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bathrooms
                </label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                  min="0"
                  step="0.5"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Square Feet
                </label>
                <input
                  type="number"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
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
                placeholder="Describe the property..."
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
                Property Images
              </label>
              
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
                <div className="text-center">
                  <SafeIcon icon={FiImage} className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Drag and drop images here or click to browse
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Upload Images
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Virtual Tour Link (optional)
              </label>
              <input
                type="text"
                placeholder="e.g., https://matterport.com/tour/..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Features
              </label>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Air Conditioning', 'Fireplace', 'Garage', 'Balcony',
                  'Pool', 'Garden', 'Gym', 'Security System',
                  'Elevator', 'Pets Allowed', 'Furnished', 'Washer/Dryer'
                ].map((feature) => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Custom Features (one per line)
              </label>
              <textarea
                rows={4}
                placeholder="Enter additional features..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
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
                {['modern', 'classic', 'minimal', 'luxury'].map((template) => (
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
                      {template === 'modern' && 'Clean, contemporary design with bold visual elements'}
                      {template === 'classic' && 'Traditional layout with elegant typography'}
                      {template === 'minimal' && 'Simple, focused design with key features highlighted'}
                      {template === 'luxury' && 'Premium design with rich details and elegant styling'}
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
                    <dd className="text-sm text-gray-900 dark:text-white">{formData.title || 'Not specified'}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{formData.address || 'Not specified'}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Price</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">{formData.price || 'Not specified'}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Specs</dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {formData.beds} beds, {formData.baths} baths, {formData.sqft} sqft
                    </dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Template</dt>
                    <dd className="text-sm text-gray-900 dark:text-white capitalize">{formData.template}</dd>
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
            onClick={() => navigate('/app/micro-sites')}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Micro Site
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
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {step.id}
              </div>
              <div className="ml-3">
                <p
                  className={`text-sm font-medium ${
                    currentStep >= step.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.id
                      ? 'bg-primary-600'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
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
                {loading ? (
                  <LoadingSpinner size="sm" className="mr-2" />
                ) : (
                  <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                )}
                Save as Draft
              </button>
              
              <button
                onClick={() => handleSubmit('publish')}
                disabled={loading}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 flex items-center"
              >
                {loading ? (
                  <LoadingSpinner size="sm" className="mr-2" />
                ) : (
                  <SafeIcon icon={FiEye} className="w-4 h-4 mr-2" />
                )}
                Publish Site
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

export default CreateMicroSite;