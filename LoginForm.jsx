import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="form-box">
        <div className="logo">▲</div>
        <h2>Welcome back</h2>
        <p>Please enter your details to login.</p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="user@example.com" required />

          <label>
            Password <a href="#">Forgot password?</a>
          </label>
          <input type="password" placeholder="••••••••" required />

          <div className="checkbox-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="divider">OR</div>

          <div className="social-buttons">
            <button type="button" className="apple">Sign in with Apple</button>
            <button type="button" className="google">Sign in with Google</button>
          </div>

          <p className="register-text">Don't have an account? <a href="#">Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;