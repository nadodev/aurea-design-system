// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeContextType, ThemeProviderProps } from '../types/type';
import { darkTheme, defaultTheme, lightTheme, Theme } from '@/tokens/theme';
import { getThemeVariables } from './variables';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  type ThemeName = 'default' | 'dark' | 'light';

  const availableThemes: Record<ThemeName, Theme> = {
    default: defaultTheme,
    dark: darkTheme,
    light: lightTheme,
  };

  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>('default');
  const [theme, setThemeState] = useState<Theme>(availableThemes.default);

  const setTheme = (themeName: ThemeName) => {
    if (availableThemes[themeName]) {
      setCurrentThemeName(themeName);
      setThemeState(availableThemes[themeName]);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeName, availableThemes } }>
      <div
        className="min-h-screen transition-colors duration-300"
        style={getThemeVariables(theme)}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};