// src/App.js

import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';

const App = () => {
  const handleNavigate = () => {
    // Logic to navigate to the next step
    console.log("Navigate to the next step");
  };

  return (
    <div className="App">
      <LandingPage onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
