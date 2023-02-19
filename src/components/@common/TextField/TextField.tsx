import React from 'react';
import type { TextFieldProps } from './TextField.types';

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...attributes }, ref) => {
    return <input ref={ref} {...attributes} />;
  }
);

export default TextField;
