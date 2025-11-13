import React, {  useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import Goodbye from './pages/Goodbye';
import LawyerDirectory from './pages/LawyerDirectory';
import RegistrationAPITest from './pages/RegistrationAPITest';

const AuthContent = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authMode, setAuthMode] = useState(location.pathname === '/register' ? 'register' : 'login');
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState('');

  const handleRegisterSuccess = (email) => {
    setPendingVerificationEmail(email);
    setAuthMode('verify');
  };

  const handleVerificationSuccess = () => {
    setAuthMode('login');
    setPendingVerificationEmail('');
  };

  const handleLoginSuccess = (token, userData, responseData) => {
    console.log('Login Success - User Data:', userData);
    console.log('Redirect field:', userData.redirect);
    console.log('Role:', userData.role);
    console.log('Registration ID:', userData.registration_id);
    
    login(token, userData);
    
    // Use backend redirect field if available
    if (userData.redirect) {
      console.log('Navigating to:', userData.redirect);
      navigate(userData.redirect);
    } else if (userData.is_admin || userData.role === 'admin') {
      console.log('Navigating to: /admin-dashboard');
      navigate('/admin-dashboard');
    } else if (userData.role === 'lawyer' || userData.registration_id) {
      console.log('Navigating to: /lawyer-dashboard');
      navigate('/lawyer-dashboard');
    } else {
      console.log('Navigating to: /');
      navigate('/');
    }
  };

  const handleLogout = () => {
    logout();
    setAuthMode('login');
  };

  const handleResetSuccess = () => {
    setAuthMode('login');
  };



  const handleReturnToLogin = () => {
    setAuthMode('login');
  };





  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left blue sidebar */}
      <Sidebar isAuthPage={true} />

      {/* Right form area */}
      <main className="flex-1 flex items-start justify-start pt-12 pl-16 pr-16 pb-12 overflow-y-auto">
        <div className="w-full max-w-[620px]">
          {authMode === 'register' ? (
            <Register
              onSwitchToLogin={() => { setAuthMode('login'); navigate('/login'); }}
              onRegisterSuccess={handleRegisterSuccess}
            />
          ) : authMode === 'login' ? (
            <Login
              onSwitchToRegister={() => { setAuthMode('register'); navigate('/register'); }}
              onSwitchToForgot={() => setAuthMode('forgot')}
              onLoginSuccess={handleLoginSuccess}
              onSwitchToAPITest={() => setAuthMode('api-test')}
            />
          ) : authMode === 'forgot' ? (
            <ForgotPassword onSwitchToLogin={() => { setAuthMode('login'); navigate('/login'); }} />
          ) : authMode === 'verify' ? (
            <VerifyEmail
              email={pendingVerificationEmail}
              onVerified={handleVerificationSuccess}
              onSwitchToLogin={() => { setAuthMode('login'); navigate('/login'); }}
            />
          ) : authMode === 'reset' ? (
            <ResetPassword onResetSuccess={handleResetSuccess} />
          ) : authMode === 'goodbye' ? (
            <Goodbye onReturnToLogin={handleReturnToLogin} />
          ) : authMode === 'api-test' ? (
            <RegistrationAPITest onBack={() => { setAuthMode('login'); navigate('/login'); }} />
          ) : null}
        </div>
      </main>
    </div>
  );
};

const LegalCityAuth = () => {
  return <AuthContent />;
};

export default LegalCityAuth;
