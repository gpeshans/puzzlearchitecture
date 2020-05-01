import * as React from 'react';
import './index.scss';

interface ButtonProps {
  text: string;
  onClick?: (event: any) => void;
  autoFocus?: boolean;
  type?: 'button' | 'submit';
}

export const Button = ({ text, onClick, autoFocus = false, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} autoFocus={autoFocus} className="pzButton">
      {text}
    </button>
  );
};
