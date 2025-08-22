// ThemeToggle.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="px-md py-sm bg-secondary text-white rounded hover:opacity-90 transition-opacity flex items-center"
    >
      <span className="mr-sm">{isDark ? '☀️' : '🌙'}</span>
      {isDark ? 'Tema Claro' : 'Tema Escuro'}
    </button>
  );
};

export default ThemeToggle;