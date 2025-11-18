import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthForm from './AuthForm';

// Mock the API module
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() },
    },
  })),
}));

const mockOnSwitchToLogin = jest.fn();
const mockOnRegisterSuccess = jest.fn();

describe('AuthForm Password Validation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows "Required" error for empty password', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: 'a' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  test('shows "Password must be at least 8 characters" for short password', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: '1234567' } });

    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
  });

  test('shows "Password must contain at least one lowercase letter" for password without lowercase', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: '12345678' } });

    expect(screen.getByText('Password must contain at least one lowercase letter')).toBeInTheDocument();
  });

  test('shows "Password must contain at least one uppercase letter" for password without uppercase', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: '12345678a' } });

    expect(screen.getByText('Password must contain at least one uppercase letter')).toBeInTheDocument();
  });

  test('shows "Password must contain at least one number" for password without number', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: 'Abcdefgh' } });

    expect(screen.getByText('Password must contain at least one number')).toBeInTheDocument();
  });

  test('shows "Password must contain at least one special character" for password without special char', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');
    fireEvent.change(passwordInput, { target: { value: 'Abcdefg1' } });

    expect(screen.getByText('Password must contain at least one special character')).toBeInTheDocument();
  });

  test('clears error when password becomes valid', () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    const passwordInput = screen.getByPlaceholderText('8+ characters');

    // Invalid password
    fireEvent.change(passwordInput, { target: { value: '123' } });
    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();

    // Valid password
    fireEvent.change(passwordInput, { target: { value: 'Abcdefg1!' } });
    expect(screen.queryByText('Password must be at least 8 characters')).not.toBeInTheDocument();
  });

  test('form submission is blocked when password is invalid', async () => {
    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    // Fill required fields except password
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Anytown' } });
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'CA' } });
    fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '12345' } });
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'USA' } });
    fireEvent.change(screen.getByLabelText('Mobile Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByLabelText('Creating an account means you\'re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.'));

    // Invalid password
    fireEvent.change(screen.getByPlaceholderText('8+ characters'), { target: { value: '123' } });

    const submitButton = screen.getByRole('button', { name: 'Create Account' });
    fireEvent.click(submitButton);

    // Form should not submit (no success callback called)
    await waitFor(() => {
      expect(mockOnRegisterSuccess).not.toHaveBeenCalled();
    });
  });

  test('form submission succeeds when password is valid', async () => {
    // Mock the API call
    const mockApi = require('../../utils/api').default;
    mockApi.post.mockResolvedValue({ data: {} });

    render(<AuthForm onSwitchToLogin={mockOnSwitchToLogin} onRegisterSuccess={mockOnRegisterSuccess} />);

    // Fill all required fields with valid data
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'johndoe' } });
    fireEvent.change(screen.getByLabelText('Address'), { target: { value: '123 Main St' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Anytown' } });
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'CA' } });
    fireEvent.change(screen.getByLabelText('Zip Code'), { target: { value: '12345' } });
    fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'USA' } });
    fireEvent.change(screen.getByLabelText('Mobile Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('8+ characters'), { target: { value: 'Abcdefg1!' } });
    fireEvent.click(screen.getByLabelText('Creating an account means you\'re okay with our Terms of Service, Privacy Policy, and our default Notification Settings.'));

    const submitButton = screen.getByRole('button', { name: 'Create Account' });
    fireEvent.click(submitButton);

    // Form should submit successfully
    await waitFor(() => {
      expect(mockOnRegisterSuccess).toHaveBeenCalledWith('john@example.com');
    });

    // Restore the mock
    mockApi.post.mockRestore();
  });
});
