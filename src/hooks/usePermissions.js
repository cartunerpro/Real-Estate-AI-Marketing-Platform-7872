import { useAuth } from '../contexts/AuthContext';
import { ROLE_PERMISSIONS } from '../constants/roles';

export const usePermissions = () => {
  const { user } = useAuth();
  
  const hasPermission = (permission) => {
    if (!user || !user.role) return false;
    return ROLE_PERMISSIONS[user.role]?.includes(permission) || false;
  };

  const hasAnyPermission = (permissions) => {
    return permissions.some(permission => hasPermission(permission));
  };

  const hasAllPermissions = (permissions) => {
    return permissions.every(permission => hasPermission(permission));
  };

  return {
    hasPermission,
    hasAnyPermission,
    hasAllPermissions
  };
};