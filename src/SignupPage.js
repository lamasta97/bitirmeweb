import React, { useState } from 'react';
import './signup.css'; // Import CSS file
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { app } from './firebase'; // Import Firebase app instance
import { Link } from 'react-router-dom'; 

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState(null);
  const [verificationSent, setVerificationSent] = useState(false); // State to track if verification email has been sent

  const auth = getAuth(app);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      
      // If sign-up successful, clear input fields, reset error message, and set verification status
      setEmail('');
      setPassword('');
      setSignupError(null);
      setVerificationSent(true);
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
          {verificationSent && <p>Verification email sent. Please check your inbox.</p>}
        </form>
        <Link to="/">Giriş yapma ekranına geri dön</Link> {/* Link to navigate back to the login page */}
      </div>
    </div>
  );
};

export default SignupPage;
