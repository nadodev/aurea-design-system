// SpacingDemo.tsx
import React from 'react';
import Card from './Card';
import { useTheme } from '../contexts/ThemeContext';

const SpacingDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Card title="Espaçamentos" variant="secondary">
      <div className="space-y-md">
        <div className="flex items-center">
          <div 
            className="mr-sm rounded bg-primary"
            style={{ 
              width: theme.spacing.sm, 
              height: theme.spacing.sm,
              backgroundColor: theme.colors.primary
            }}
          ></div>
          <span>Small: {theme.spacing.sm}</span>
        </div>
        
        <div className="flex items-center">
          <div 
            className="mr-sm rounded bg-primary"
            style={{ 
              width: theme.spacing.md, 
              height: theme.spacing.md,
              backgroundColor: theme.colors.primary
            }}
          ></div>
          <span>Medium: {theme.spacing.md}</span>
        </div>
        
        <div className="flex items-center">
          <div 
            className="mr-sm rounded bg-primary"
            style={{ 
              width: theme.spacing.lg, 
              height: theme.spacing.lg,
              backgroundColor: theme.colors.primary
            }}
          ></div>
          <span>Large: {theme.spacing.lg}</span>
        </div>
      </div>
    </Card>
  );
};

export default SpacingDemo;