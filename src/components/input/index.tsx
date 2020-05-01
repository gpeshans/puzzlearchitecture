import * as React from 'react';

import './index.scss';

interface InputProps extends React.HTMLProps<React.InputHTMLAttributes<HTMLInputElement>> {
  onChange: (event: any) => void;
  id: string;
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
