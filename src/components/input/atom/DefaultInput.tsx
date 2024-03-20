import { forwardRef } from 'react';
import { INPUT } from '../input.constant';
import { DefaultInputProps } from '../input.type';

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={`${INPUT.CLASSNAME.BASIC} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);
