// Header.tsx
import React from 'react';

const Header: React.FC = () => {

  return (
    <header className="text-[var(--color-primary)]">
      <h1
        className="font-bold text-[var(--color-primary)] bg-[var(--color-success)]"
      >
        Meu App com Tema
      </h1>
    </header>
  );
};

export default Header;