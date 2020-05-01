import * as React from 'react';

import './index.scss';

interface TextAreaProps extends React.HTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
  onChange: (event: any) => void;
  id: string;
}

export const Textarea = ({ onChange, id, required = false, placeholder = '' }: TextAreaProps) => {
  return (
    <textarea
      id={id}
      name={id}
      placeholder={placeholder}
      onChange={onChange}
      className="pzTextarea"
      required={required}
    />
  );
};
