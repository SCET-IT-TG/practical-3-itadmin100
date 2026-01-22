import React, { useState } from 'react';

const ThemeSwitcher = () => {
  // 1. Initialize state (false = Light Mode, true = Dark Mode)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Helper function to toggle the state
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 3. Define styles based on the current state
  const containerStyle = {
    // Conditional styling: Dark background if true, White if false
    backgroundColor: isDarkMode ? '#20232a' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#333333',
    padding: '40px',
    margin: '20px',
    borderRadius: '8px',
    border: isDarkMode ? '1px solid #61dafb' : '1px solid #ccc',
    textAlign: 'center',
    transition: 'all 0.3s ease', // Makes the color change smooth
  };

  return (
    <div style={containerStyle}>
      {/* 4. Conditional Rendering for Text */}
      <h2>{isDarkMode ? 'Dark Mode Active 🌙' : 'Light Mode Active ☀️'}</h2>
      
      <p>Click the button below to toggle the theme styles.</p>

      {/* 5. Button with conditional logic */}
      <button 
        onClick={toggleTheme}
        style={{
          padding: '12px 24px',
          marginTop: '15px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          // Invert button colors for better contrast
          backgroundColor: isDarkMode ? '#61dafb' : '#333333',
          color: isDarkMode ? '#20232a' : '#ffffff',
        }}
      >
        {/* Dynamic Button Text */}
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;