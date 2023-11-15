// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="logo">Xaltt</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
          <button className="sign-in">Sign In</button>
        </div>
      </nav>
      <header className="landing-header">
        <h1>Your Journey Begins Here</h1>
        <p>Welcome to Xaltt - Your AI-powered travel companion</p>
        <button className="get-started">Get Started</button>
      </header>
      <section className="features">
        <div className="feature-item">
          <h2>AI Enabled</h2>
          <p>Experience personalized flight booking with our AI-driven recommendations.</p>
        </div>
        <div className="feature-item">
          <h2>Customer Centric</h2>
          <p>We prioritize your comfort and preferences, making every trip about you.</p>
        </div>
        <div className="feature-item">
          <h2>Buy Now, Pay Later</h2>
          <p>Flexible payment options to ease your travel plans with BNPL.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
