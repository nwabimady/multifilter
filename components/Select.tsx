"use client"

// Select.tsx
import React from 'react';

interface SelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ onChange, options, value, className }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={className}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;