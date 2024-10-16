import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the dashboard or any other page as per your requirement
    navigate('/dashboard');
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="card bg-light text-dark">
      <div className="card-body p-5">
        <div className="mb-4 text-center">
          <i className="bi bi-credit-card text-warning display-4 mb-3"></i>
          <h1 className="card-title display-6 mb-2">WEALTHMATE</h1>
          <p className="card-text lead mb-4">Easiest way to manage your finances</p>
        </div>
        <button className="btn btn-warning btn-lg w-100 text-dark" onClick={handleGetStarted}>
          Get Started
        </button>
        <p className="text-center mt-3">
          Already have an account?{' '}
          <button className="btn btn-link text-warning p-0" onClick={handleLogin}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
