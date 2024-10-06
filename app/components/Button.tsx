import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Pour ajouter des classes personnalisées
  type?: 'button' | 'submit' | 'reset'; // Types de bouton
  disabled?: boolean; // Pour désactiver le bouton
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;