'use client'
// App.tsx
import React from 'react';
import Header from './components/Header';
import ColorDemo from './components/ColorDemo';
import SpacingDemo from './components/SpacingDemo';
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  return (
    <div className="container mx-auto p-md">
      <Header />
     
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;