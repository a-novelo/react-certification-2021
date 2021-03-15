import React, { useState, useContext, useCallback } from 'react';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without a ThemeProvider.`);
  }
  return context;
}

function ThemeProvider({ children }) {
  const [displayTheme, setDisplayTheme] = useState('light');

  const getTheme = useCallback(() => {
    return displayTheme;
  }, [displayTheme]);

  const setTheme = useCallback((receivedTheme) => {
    setDisplayTheme(receivedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme };
export default ThemeProvider;
