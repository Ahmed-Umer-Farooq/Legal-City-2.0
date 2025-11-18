import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import api from '../utils/api';

const RegistrationAPITest = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('user');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const [userForm, setUserForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    zip_code: '',
    city: '',
    state: '',
    country: '',
    mobile_number: ''
  });

  const [lawyerForm, setLawyerForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    registration_id: '',
    law_firm: '',
    speciality: '',
    address: '',
    zip_code: '',
    city: '',
    state: '',
    country: '',
    mobile_number: ''
  });

  const [unifiedForm, setUnifiedForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    zip_code: '',
    city: '',
    state: '',
    country: '',
    mobile_number: '',
    registration_id: '',
    law_firm: '',
    speciality: ''
  });

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLawyerInputChange = (e) => {
    const { name, value } = e.target;
    setLawyerForm(prev => ({ ...prev, [name]: value }));
  };

  const handleUnifiedInputChange = (e) => {
    const { name, value } = e.target;
    setUnifiedForm(prev => ({ ...prev, [name]: value }));
  };

  const testUserRegistration = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await api.post('/api/auth/register-user', userForm);
      setResponse({ success: true, data: res.data });
      alert('User registration successful!');
    } catch (error) {
      const errorData = error.response?.data || { message: 'Request failed' };
      setResponse({ success: false, data: errorData });
      alert('User registration failed');
    } finally {
      setLoading(false);
    }
  };

  const testLawyerRegistration = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await api.post('/api/auth/register-lawyer', lawyerForm);
      setResponse({ success: true, data: res.data });
      alert('Lawyer registration successful!');
    } catch (error) {
      const errorData = error.response?.data || { message: 'Request failed' };
      setResponse({ success: false, data: errorData });
      alert('Lawyer registration failed');
    } finally {
      setLoading(false);
    }
  };

  const testUnifiedRegistration = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const payload = { ...unifiedForm };
      // Remove empty lawyer fields for user registration
      if (!payload.registration_id && !payload.law_firm && !payload.speciality) {
        delete payload.registration_id;
        delete payload.law_firm;
        delete payload.speciality;
      }
      const res = await api.post('/api/auth/register', payload);
      setResponse({ success: true, data: res.data });
      alert('Unified registration successful!');
    } catch (error) {
      const errorData = error.response?.data || { message: 'Request failed' };
      setResponse({ success: false, data: errorData });
      alert('Unified registration failed');
    } finally {
      setLoading(false);
    }
  };

  const fillSampleData = (formType) => {
    if (formType === 'user') {
      setUserForm({
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'securepassword123',
        address: '123 Main St',
        zip_code: '12345',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        mobile_number: '+1234567890'
      });
    } else if (formType === 'lawyer') {
      setLawyerForm({
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com',
        password: 'securepassword123',
        registration_id: 'LAW123456',
        law_firm: 'Smith & Associates',
        speciality: 'Criminal Law',
        address: '456 Legal Ave',
        zip_code: '67890',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        mobile_number: '+1987654321'
      });
    } else if (formType === 'unified-user') {
      setUnifiedForm({
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'securepassword123',
        address: '123 Main St',
        zip_code: '12345',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        mobile_number: '+1234567890',
        registration_id: '',
        law_firm: '',
        speciality: ''
      });
    } else if (formType === 'unified-lawyer') {
      setUnifiedForm({
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com',
        password: 'securepassword123',
        registration_id: 'LAW123456',
        law_firm: 'Smith & Associates',
        speciality: 'Criminal Law',
        address: '456 Legal Ave',
        zip_code: '67890',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        mobile_number: '+1987654321'
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#0EA5E9] hover:text-[#0284C7] transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Registration API Testing</h2>
          <p className="text-gray-600 mt-1">Test the registration endpoints with sample data</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        {[
          { key: 'user', label: 'Register User' },
          { key: 'lawyer', label: 'Register Lawyer' },
          { key: 'unified', label: 'Unified Register' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-white text-[#0EA5E9] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Forms */}
      <div className="space-y-6">
        {/* User Registration Form */}
        {activeTab === 'user' && (
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">POST /api/auth/register-user</h3>
              <button
                onClick={() => fillSampleData('user')}
                className="text-sm text-[#0EA5E9] hover:text-[#0284C7] underline"
              >
                Fill Sample Data
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.entries(userForm).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace('_', ' ')}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleUserInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={testUserRegistration}
              disabled={loading}
              className="w-full py-3 bg-[#0EA5E9] hover:bg-[#0284C7] disabled:bg-gray-400 text-white font-semibold rounded-md transition-colors"
            >
              {loading ? 'Testing...' : 'Test User Registration'}
            </button>
          </div>
        )}

        {/* Lawyer Registration Form */}
        {activeTab === 'lawyer' && (
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">POST /api/auth/register-lawyer</h3>
              <button
                onClick={() => fillSampleData('lawyer')}
                className="text-sm text-[#0EA5E9] hover:text-[#0284C7] underline"
              >
                Fill Sample Data
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.entries(lawyerForm).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace('_', ' ')}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleLawyerInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={testLawyerRegistration}
              disabled={loading}
              className="w-full py-3 bg-[#0EA5E9] hover:bg-[#0284C7] disabled:bg-gray-400 text-white font-semibold rounded-md transition-colors"
            >
              {loading ? 'Testing...' : 'Test Lawyer Registration'}
            </button>
          </div>
        )}

        {/* Unified Registration Form */}
        {activeTab === 'unified' && (
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">POST /api/auth/register</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => fillSampleData('unified-user')}
                  className="text-sm text-[#0EA5E9] hover:text-[#0284C7] underline"
                >
                  User Sample
                </button>
                <button
                  onClick={() => fillSampleData('unified-lawyer')}
                  className="text-sm text-[#0EA5E9] hover:text-[#0284C7] underline"
                >
                  Lawyer Sample
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.entries(unifiedForm).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {key.replace('_', ' ')}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleUnifiedInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={testUnifiedRegistration}
              disabled={loading}
              className="w-full py-3 bg-[#0EA5E9] hover:bg-[#0284C7] disabled:bg-gray-400 text-white font-semibold rounded-md transition-colors"
            >
              {loading ? 'Testing...' : 'Test Unified Registration'}
            </button>
          </div>
        )}

        {/* Response Display */}
        {response && (
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Response</h3>
            <div className={`p-4 rounded-md ${response.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationAPITest;
