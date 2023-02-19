import React from 'react';
import * as Styled from './TextField.styled';
import type { TextFieldProps } from './TextField.types';

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...attributes }, ref) => {
    return <Styled.TextField ref={ref} {...attributes} />;
  }
);

export default TextField;
