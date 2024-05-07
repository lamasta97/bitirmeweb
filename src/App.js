// Import necessary modules from React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage'; // Import the SignupPage component
import './App.css'; // Import app.css file

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>VR kayıt olma ve giriş yapma ekranına hoşgeldiniz</h1>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Route for the login page */}
          <Route path="/signup" element={<SignupPage />} /> {/* Route for the sign-up page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
