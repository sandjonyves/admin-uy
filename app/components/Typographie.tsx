import React from 'react';

type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'label';
  children: React.ReactNode; 
  className?: string; 
};

const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  const Tag = variant; 

  const baseClasses = 'text-gray-900 dark:text-white'; 

  const variantsClasses = {
    h1: `${baseClasses} text-4xl font-bold`, 
    h2: `${baseClasses} text-3xl font-semibold`, 
    h3: `${baseClasses} text-2xl font-medium`, 
    p: `${baseClasses} text-base `, 
    label :`block mb-2 text-sm font-medium text-gray-900 dark:text-white`
  };

  return (
    <Tag className={`${variantsClasses[variant]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;