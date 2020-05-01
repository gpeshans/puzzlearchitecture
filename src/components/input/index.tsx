import * as React from 'react';

import './index.scss';

interface InputProps {
  onChange: (event: any) => void;
  id: string;
  required?: boolean;
  placeholder?: string;
  type?: 'text' | 'email';
}

export const Input = ({ onChange, id, type = 'text', required = false, placeholder = '' }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      onChange={onChange}
      className="pzInput"
      required={required}
    />
  );
};
