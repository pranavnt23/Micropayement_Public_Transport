import React from 'react';
import './Home.css'; // We'll create this CSS file next

const Homepage = () => {
  return (
    <div className="homepage-container">
      <header className="header">
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
        <div className="logo">
          <h1>TransitChain</h1>
        </div>
      </header>
      
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-image-container">
            <img 
              src="/api/placeholder/800/500" 
              alt="Decentralized transport payment system" 
              className="hero-image"
            />
          </div>
          <div className="hero-text">
            <h2>Seamless Micropayments for Public Transport</h2>
            <p>A unified, cross-border payment platform powered by blockchain technology</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <p>© 2025 TransitChain - Decentralized Micropayment System</p>
      </footer>
    </div>
  );
};

export default Homepage;