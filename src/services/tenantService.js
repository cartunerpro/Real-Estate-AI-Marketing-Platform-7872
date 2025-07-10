// Mock tenant service for development
const mockTenants = [
  {
    id: 'tenant-1',
    name: 'Acme Real Estate',
    domain: 'acme-realestate',
    logo: null,
    primaryColor: '#3b82f6',
    isDefault: true,
    plan: 'professional',
    status: 'active',
    createdAt: new Date().toISOString(),
    settings: {
      branding: {
        primaryColor: '#3b82f6',
        secondaryColor: '#64748b',
        logo: null,
        favicon: null,
      },
      features: {
        marketReports: true,
        microSites: true,
        aiNarratives: true,
        customBranding: true,
      },
      integrations: {
        mls: {
          enabled: true,
          provider: 'ATTOM'
        },
        email: {
          enabled: true,
          provider: 'mailchimp'
        },
        crm: {
          enabled: false,
          provider: null
        }
      }
    }
  }
];

export const tenantService = {
  async getUserTenants() {
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockTenants;
  },

  async createTenant(tenantData) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newTenant = {
      ...tenantData,
      id: `tenant-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    mockTenants.push(newTenant);
    return newTenant;
  },

  async updateTenant(tenantId, updates) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockTenants.findIndex(t => t.id === tenantId);
    if (index !== -1) {
      mockTenants[index] = { ...mockTenants[index], ...updates };
      return mockTenants[index];
    }
    throw new Error('Tenant not found');
  },

  async setActiveTenant(tenantId) {
    await new Promise(resolve => setTimeout(resolve, 200));
    return { success: true };
  },

  async getTenantSettings(tenantId) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const tenant = mockTenants.find(t => t.id === tenantId);
    if (tenant) {
      return tenant.settings;
    }
    throw new Error('Tenant not found');
  },

  async updateTenantSettings(tenantId, settings) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = mockTenants.findIndex(t => t.id === tenantId);
    if (index !== -1) {
      mockTenants[index].settings = { ...mockTenants[index].settings, ...settings };
      return mockTenants[index].settings;
    }
    throw new Error('Tenant not found');
  }
};