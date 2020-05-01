import * as React from 'react';
import './index.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, onClick, autoFocus = false, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} autoFocus={autoFocus} className="pzButton">
      {text}
    </button>
  );
};
