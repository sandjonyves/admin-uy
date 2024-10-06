import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface SelectProps {
  options: any; // Options du select
  value: string; // Valeur actuelle
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Fonction de gestion des changements
  register: UseFormRegister<any>; // Type pour register
  label?: string; // Étiquette optionnelle
  className?: string; // Classes CSS personnalisées
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, register, label, className }) => {
  return (
    <select
      value={value}
      // onChange={onChange}
      {...register(label || '')} 
      // Utilise une chaîne vide si label n'est pas fourni
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4 ${className}`}
    >
      {options.map((option,index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;