export const ROLES = {
  ADMIN: 'admin',
  AGENT: 'agent',
  USER: 'user'
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    'manage_users',
    'manage_tenants',
    'manage_billing',
    'manage_reports',
    'manage_sites',
    'access_analytics',
    'manage_settings'
  ],
  [ROLES.AGENT]: [
    'create_reports',
    'manage_own_reports',
    'create_sites',
    'manage_own_sites',
    'view_analytics',
    'manage_profile'
  ],
  [ROLES.USER]: [
    'view_reports',
    'view_sites',
    'manage_profile'
  ]
};

export const ROLE_LABELS = {
  [ROLES.ADMIN]: 'Administrator',
  [ROLES.AGENT]: 'Real Estate Agent',
  [ROLES.USER]: 'Basic User'
};