import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedColor = localStorage.getItem('primaryColor') || 'blue';
    
    setTheme(savedTheme);
    setPrimaryColor(savedColor);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
    localStorage.setItem('primaryColor', color);
    // Update CSS custom properties for dynamic theming
    document.documentElement.style.setProperty('--primary-color', color);
  };

  const value = {
    theme,
    primaryColor,
    toggleTheme,
    changePrimaryColor,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};