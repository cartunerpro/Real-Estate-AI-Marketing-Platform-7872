import React from 'react';
import { usePermissions } from '../../hooks/usePermissions';

const PermissionGate = ({ 
  children, 
  permissions, 
  requireAll = false,
  fallback = null 
}) => {
  const { hasAnyPermission, hasAllPermissions } = usePermissions();

  const hasAccess = requireAll 
    ? hasAllPermissions(permissions)
    : hasAnyPermission(permissions);

  if (!hasAccess) return fallback;

  return children;
};

export default PermissionGate;