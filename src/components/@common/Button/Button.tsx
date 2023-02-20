import React from 'react';
import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styled';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'gray07', children, ...attributes }, ref) => {
    return (
      <Styled.Button color={color} ref={ref} {...attributes}>
        {children}
      </Styled.Button>
    );
  }
);

export default Button;
