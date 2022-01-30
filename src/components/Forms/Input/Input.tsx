import { forwardRef } from 'react';
import { InputProps } from './type';
import InputElement from './inputStyle';
import useInputProps from './useInputProps';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const computedProps = useInputProps({ ...props, ref });

  return <InputElement {...computedProps} />;
});
