// src/LoginPage.js
import React, { useState } from 'react';
import './styles.css'; // Import CSS file
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase'; // Import Firebase app instance
import { Link } from 'react-router-dom'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // If login successful, clear input fields and reset error message
      setEmail('');
      setPassword('');
      setLoginError(null);
      console.log('User logged in successfully');
    } catch (error) {
      // If login fails, set error message
      setLoginError(error.message);
      console.error('Login error:', error);
    }
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Giriş yap</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Şifre:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Giriş yap </button>
          {loginError && <p className="error-message">{loginError}</p>}
        </form>
        <Link to="/signup">Kayıt Ol</Link> {/* Link to navigate to the sign-up page */}
      </div>
    </div>
  );
};

export default LoginPage;
