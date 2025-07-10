import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { ROLES } from '../constants/roles';
import toast from 'react-hot-toast';
import supabase from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
    
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        
        if (event === 'SIGNED_IN' && session) {
          try {
            const userData = await authService.validateToken(session.access_token);
            setUser(userData);
            setIsAuthenticated(true);
          } catch (error) {
            console.error('Auth state change error:', error);
            setUser(null);
            setIsAuthenticated(false);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const checkAuthStatus = async () => {
    try {
      setLoading(true);
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Session error:', error);
        throw error;
      }
      
      if (session) {
        const userData = await authService.validateToken(session.access_token);
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const { user: userData, token } = response;
      localStorage.setItem('authToken', token);
      setUser(userData);
      setIsAuthenticated(true);
      toast.success('Login successful!');
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed');
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      const { user: newUser, token } = response;
      if (token) {
        localStorage.setItem('authToken', token);
      }
      setUser(newUser);
      setIsAuthenticated(true);
      toast.success('Registration successful!');
      return newUser;
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Registration failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem('authToken');
      setUser(null);
      setIsAuthenticated(false);
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const updatedUser = await authService.updateProfile(profileData);
      setUser(prev => ({ ...prev, ...updatedUser }));
      toast.success('Profile updated successfully');
      return updatedUser;
    } catch (error) {
      toast.error(error.message || 'Profile update failed');
      throw error;
    }
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const isAdmin = () => hasRole(ROLES.ADMIN);
  const isAgent = () => hasRole(ROLES.AGENT);
  const isUser = () => hasRole(ROLES.USER);

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    checkAuthStatus,
    hasRole,
    isAdmin,
    isAgent,
    isUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};