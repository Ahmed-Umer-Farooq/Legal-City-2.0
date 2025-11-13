import React from 'react';

const Goodbye = ({ onReturnToLogin }) => {
  return (
    <div className="w-full">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#0284C7] rounded-full px-6 py-3 shadow-lg inline-flex">
            <span className="text-white font-bold text-3xl">Legal</span>
          </div>
          <span className="text-[#0284C7] font-bold text-3xl">City</span>
        </div>
        <p className="text-[#0284C7] text-sm font-semibold tracking-wider uppercase">
          " Legal for the people "
        </p>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Goodbye</h2>
        <p className="text-gray-600 mb-6">
          We're sorry to see you go. Your account has been successfully deleted.
        </p>
      </div>

      {/* Message */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Deleted Successfully</h3>
            <p className="text-gray-600">
              Your account and all associated data have been permanently removed from our system.
              If you change your mind, you can always create a new account.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="text-sm font-semibold text-blue-900 mb-2">What happens next?</h4>
            <ul className="text-sm text-blue-800 space-y-1 text-left">
              <li>• Your profile information is permanently deleted</li>
              <li>• All authentication tokens are invalidated</li>
              <li>• You will be logged out from all devices</li>
              <li>• Any pending verifications are cancelled</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Thank you for being part of the Legal City community. We hope to see you again in the future!
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4">
        <button
          onClick={onReturnToLogin}
          className="w-full py-3.5 bg-[#0891B2] hover:bg-[#0284C7] text-white font-semibold rounded-md transition-colors text-base shadow-md"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default Goodbye;
