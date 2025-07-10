import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { tenantService } from '../services/tenantService';

const TenantContext = createContext();

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};

export const TenantProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [currentTenant, setCurrentTenant] = useState(null);
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      loadTenants();
    }
  }, [isAuthenticated, user]);

  const loadTenants = async () => {
    try {
      setLoading(true);
      const userTenants = await tenantService.getUserTenants();
      setTenants(userTenants);
      
      // Set current tenant (first one or user's default)
      if (userTenants.length > 0) {
        const defaultTenant = userTenants.find(t => t.isDefault) || userTenants[0];
        setCurrentTenant(defaultTenant);
      }
    } catch (error) {
      console.error('Failed to load tenants:', error);
    } finally {
      setLoading(false);
    }
  };

  const switchTenant = async (tenantId) => {
    try {
      const tenant = tenants.find(t => t.id === tenantId);
      if (tenant) {
        setCurrentTenant(tenant);
        await tenantService.setActiveTenant(tenantId);
      }
    } catch (error) {
      console.error('Failed to switch tenant:', error);
    }
  };

  const createTenant = async (tenantData) => {
    try {
      const newTenant = await tenantService.createTenant(tenantData);
      setTenants(prev => [...prev, newTenant]);
      setCurrentTenant(newTenant);
      return newTenant;
    } catch (error) {
      console.error('Failed to create tenant:', error);
      throw error;
    }
  };

  const updateTenant = async (tenantId, updates) => {
    try {
      const updatedTenant = await tenantService.updateTenant(tenantId, updates);
      setTenants(prev => prev.map(t => t.id === tenantId ? updatedTenant : t));
      if (currentTenant?.id === tenantId) {
        setCurrentTenant(updatedTenant);
      }
      return updatedTenant;
    } catch (error) {
      console.error('Failed to update tenant:', error);
      throw error;
    }
  };

  const value = {
    currentTenant,
    tenants,
    loading,
    switchTenant,
    createTenant,
    updateTenant,
    loadTenants,
  };

  return (
    <TenantContext.Provider value={value}>
      {children}
    </TenantContext.Provider>
  );
};