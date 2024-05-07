// SignupPage.js

import React, { useState } from 'react';
import './signup.css'; // Import CSS file
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase'; // Import Firebase app instance
import { Link } from 'react-router-dom'; 

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState(null);

  const auth = getAuth(app);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // If sign-up successful, clear input fields and reset error message
      setEmail('');
      setPassword('');
      setSignupError(null);
      console.log('User signed up successfully');
    } catch (error) {
      // If sign-up fails, set error message
      setSignupError(error.message);
      console.error('Sign-up error:', error);
    }
  };

  return (
    <div className="container">
      <div className="signup-form">
        <h2>Kayıt ol</h2>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Kayıt ol</button>
          {signupError && <p className="error-message">{signupError}</p>}
        </form>
        <Link to="/">Giriş yapma ekranına geri dön</Link> {/* Link to navigate back to the login page */}
      </div>
    </div>
  );
};

export default SignupPage;
