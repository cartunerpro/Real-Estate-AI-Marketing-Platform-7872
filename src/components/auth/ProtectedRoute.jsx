import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { usePermissions } from '../../hooks/usePermissions';
import LoadingSpinner from '../common/LoadingSpinner';

const ProtectedRoute = ({ 
  children, 
  requiredRole = null,
  requiredPermissions = [] 
}) => {
  const { isAuthenticated, user, loading } = useAuth();
  const { hasAllPermissions } = usePermissions();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/app/dashboard" replace />;
  }

  if (requiredPermissions.length > 0 && !hasAllPermissions(requiredPermissions)) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;