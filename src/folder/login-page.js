import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform your login logic here (e.g., API call)
    // If login is successful, navigate to the dashboard or another screen
    navigate('/dashboard');
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password page
    navigate('/forgot-password');
  };

  return (
    <div className="card bg-light text-dark mx-auto" style={{ maxWidth: '400px', marginTop: '50px' }}>
      <div className="card-header text-center">
        <h2 className="card-title mb-0">Login to WEALTHMATE</h2>
      </div>
      <div className="card-body p-4">
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-warning w-100 text-dark">Log In</button>
        </form>
        <div className="mt-3 text-center">
          <button className="btn btn-link text-warning p-0" onClick={handleForgotPassword}>Forgot password?</button>
        </div>
      </div>
    </div>
  );
}
