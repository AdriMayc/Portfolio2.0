import React from 'react';

// Novo Componente para o Fundo com Grid Rotacionado
const RotatedGridBackground = ({ theme }) => {
  // Definindo opacidades diferentes conforme o tema
  const opacity = theme === "light" ? 1 : 0.1; 

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(217,216,255,0.5), rgba(255,255,255,0))',
          opacity,
        }}
      />
      <div 
        className="absolute inset-0 bg-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(220, 220, 220, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(220, 220, 220, 0.2) 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
          transform: 'rotate(-45deg) scale(2.2)',
          opacity, 
        }}
      />
    </div>
  );
};

export default RotatedGridBackground;
