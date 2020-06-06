import * as React from 'react';

import './index.scss';

interface TextAreaProps extends React.HTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
  onChange: (event: any) => void;
  name: string;
}

export const Textarea = ({ onChange, name, required = false, placeholder = '' }: TextAreaProps) => {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="pzTextarea"
      required={required}
    />
  );
};
