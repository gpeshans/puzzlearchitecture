import * as React from 'react';

import './index.scss';

interface InputProps extends React.HTMLProps<React.InputHTMLAttributes<HTMLInputElement>> {
  onChange: (event: any) => void;
  name: string;
}

export const Input = ({ onChange, name, type = 'text', required = false, placeholder = '' }: InputProps) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="pzInput"
      required={required}
    />
  );
};
