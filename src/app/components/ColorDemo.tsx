// ColorDemo.tsx
import React from 'react';
import Card from './Card';
import { useTheme } from '../contexts/ThemeContext';

const ColorDemo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <Card title="Primary Color" variant="primary">
        <div className="p-sm rounded" style={{ backgroundColor: theme.colors.primary, color: 'white' }}>
          {theme.colors.primary}
        </div>
      </Card>
      
      <Card title="Secondary Color" variant="secondary">
        <div className="p-sm rounded" style={{ backgroundColor: theme.colors.secondary, color: 'white' }}>
          {theme.colors.secondary}
        </div>
      </Card>
      
      <Card title="Danger Color" variant="danger">
        <div className="p-sm rounded" style={{ backgroundColor: theme.colors.danger, color: 'white' }}>
          {theme.colors.danger}
        </div>
      </Card>
      
      <Card title="Success Color" variant="success">
        <div className="p-sm rounded" style={{ backgroundColor: theme.colors.success, color: 'white' }}>
          {theme.colors.success}
        </div>
      </Card>
    </div>
  );
};

export default ColorDemo;