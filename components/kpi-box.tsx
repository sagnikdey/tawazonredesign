import React from 'react';

interface KpiBoxProps {
  value: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const KpiBox: React.FC<KpiBoxProps> = ({ value, label, variant = 'secondary' }) => {
  const variants = {
    primary: 'glass-card-textured p-7',
    secondary: 'glass-card-textured p-7',
    outline: 'glass-card-textured p-7',
  };

  const textVariants = {
    primary: 'text-zinc-900 dark:text-white',
    secondary: 'text-zinc-900 dark:text-white',
    outline: 'text-zinc-900 dark:text-white',
  };

  return (
    <article className={`flex flex-col justify-between ${variants[variant]}`}>
      <div>
        <p className="text-2xl md:text-4xl font-semibold tracking-tight">
          {value}
        </p>
        <p className={`mt-1 text-sm ${textVariants[variant]}`}>
          {label}
        </p>
      </div>
    </article>
  );
};

export default KpiBox;
