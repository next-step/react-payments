import { forwardRef } from 'react';
import type { InputProps } from './Input.types';
import * as Styled from './Input.styles';

export const Input = ({ ...props }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return <Styled.Root {...props} ref={ref} />;
};

export default forwardRef(Input);
