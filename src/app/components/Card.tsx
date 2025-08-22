// Card.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

const Card: React.FC<CardProps> = ({ title, children, variant = 'primary' }) => {
  const { theme } = useTheme();
  
  const variantColors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    danger: theme.colors.danger,
    success: theme.colors.success,
  };

  return (
    <div className="p-lg rounded-lg border" style={{ 
      borderColor: variantColors[variant],
      backgroundColor: `${variantColors[variant]}10`
    }}>
      <h2 className="text-base font-semibold mb-md" style={{ color: variantColors[variant] }}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;