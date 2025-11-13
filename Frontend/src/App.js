import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import LegalCityAuth from './LegalCityAuth';
import AdminDashboard from './pages/AdminDashboard';
import GoogleUserSetup from './pages/GoogleUserSetup';
import GoogleLawyerSetup from './pages/GoogleLawyerSetup';
import LawyerDirectory from './pages/LawyerDirectory';
import LawyerProfile from './pages/LawyerProfile';
import LawyerDashboard from './pages/LawyerDashboard';

function App() {
  return (
    <div className="App">
      <Toaster 
        position="top-right" 
        richColors 
        closeButton 
        duration={2000}
        toastOptions={{
          style: {
            fontSize: '14px',
            fontWeight: '500',
          },
        }}
      />
      <Routes>
        {/* Home page - Lawyer Directory */}
        <Route path="/" element={<LawyerDirectory />} />
        
        {/* Auth routes */}
        <Route path="/login" element={<LegalCityAuth />} />
        <Route path="/register" element={<LegalCityAuth />} />
        
        {/* Lawyer Profile Page */}
        <Route path="/lawyer/:id" element={<LawyerProfile />} />
        
        {/* Lawyer Dashboard */}
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
        
        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* Google OAuth Setup Pages */}
        <Route path="/google-user-setup" element={<GoogleUserSetup />} />
        <Route path="/google-lawyer-setup" element={<GoogleLawyerSetup />} />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
