// src/Components/Login/Login.jsx
import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';
import { UserContext } from '../../contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        const data = await loginUser(email, password);

        if (data.token && data.user) {
          login(data.user, data.token);
          navigate('/home');
          toast.success('Logged in successfully!');
        } else {
          setErrors({ ...errors, email: 'Login failed. Please check your credentials.' });
          toast.error('Login failed. Please check your credentials.');
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || 'Login failed. Please check your credentials.';
        setErrors({ ...errors, email: errorMsg });
        toast.error(errorMsg);
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-background" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div>
      <div className="overlay"></div>
      <div className="login-content">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className={`input-icon ${isFocused.email ? 'focused' : ''}`}>
              <FaUser className={`icon ${isFocused.email ? 'focused' : ''}`} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
                onBlur={() => setIsFocused(prev => ({ ...prev, email: false }))}
                className={`input ${isFocused.email ? 'focused' : ''}`}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-group">
            <div className={`input-icon ${isFocused.password ? 'focused' : ''}`}>
              <FaLock className={`icon ${isFocused.password ? 'focused' : ''}`} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
                onBlur={() => setIsFocused(prev => ({ ...prev, password: false }))}
                className={`input ${isFocused.password ? 'focused' : ''}`}
              />
              <div onClick={togglePasswordVisibility} className="toggle-password">
                {showPassword ? <VscEyeClosed className="icon" /> : <VscEye className="icon" />}
              </div>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
