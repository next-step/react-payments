import { forwardRef } from 'react';
import { INPUT } from '../input.constant';
import { DefaultInputProps } from '../input.type';

export const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  ({ className, readOnly, ...rest }, ref) => {
    return (
      <input
        className={`${INPUT.CLASSNAME.BASIC} ${className}`}
        readOnly={readOnly}
        ref={ref}
        {...rest}
      />
    );
  }
);

export const ReadOnlyPasswordInput = forwardRef<
  HTMLInputElement,
  DefaultInputProps
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`${INPUT.CLASSNAME.READONLY} ${className}`}
      readOnly={true}
      ref={ref}
      {...rest}
    />
  );
});
