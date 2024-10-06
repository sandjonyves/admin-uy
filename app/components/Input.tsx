import { register } from 'module';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  register: UseFormRegister<any>; // Type pour register

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange, placeholder,register }) => {
  return (
    <div className="flex flex-col mb-4">
      {/* {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>} */}
      <input
        type={type}
        value={value}
        {...register(label)}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      />
    </div>
  );
};

export default Input;