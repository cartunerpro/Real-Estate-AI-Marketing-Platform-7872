import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { TenantProvider } from './contexts/TenantContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import MarketReportsPage from './pages/market-reports/MarketReportsPage';
import MicroSitesPage from './pages/micro-sites/MicroSitesPage';
import BillingPage from './pages/billing/BillingPage';
import SettingsPage from './pages/settings/SettingsPage';
import AgentPortalPage from './pages/agent-portal/AgentPortalPage';
import AdminConsolePage from './pages/admin/AdminConsolePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TenantProvider>
            <Router>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />

                  {/* Protected Routes */}
                  <Route
                    path="/app"
                    element={
                      <ProtectedRoute>
                        <Layout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Navigate to="/app/dashboard" replace />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="market-reports/*" element={<MarketReportsPage />} />
                    <Route path="micro-sites/*" element={<MicroSitesPage />} />
                    <Route path="agent-portal" element={<AgentPortalPage />} />
                    <Route path="admin" element={<AdminConsolePage />} />
                    <Route path="billing" element={<BillingPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                  </Route>

                  {/* Catch all */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                  }}
                />
              </div>
            </Router>
          </TenantProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;