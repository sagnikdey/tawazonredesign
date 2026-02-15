import React from 'react';

interface KpiBoxProps {
  value: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const KpiBox: React.FC<KpiBoxProps> = ({ value, label, variant = 'secondary' }) => {
  const variants = {
    primary: 'bg-emerald-300 text-emerald-950 border-emerald-500/60',
    secondary: 'bg-[#0e1513] text-white border-emerald-900/70',
    outline: 'bg-transparent text-white border-emerald-700/50',
  };

  const textVariants = {
    primary: 'text-emerald-950/80',
    secondary: 'text-emerald-100/85',
    outline: 'text-emerald-100/70',
  };

  return (
    <article className={`px-5 py-5 shadow-sm border flex flex-col justify-between ${variants[variant]}`}>
      <div>
        <p className="text-3xl md:text-4xl font-semibold tracking-tight">
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
