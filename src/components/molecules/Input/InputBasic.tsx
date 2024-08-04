import { Ref, forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputBasic = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref: Ref<HTMLInputElement>) => {
    return <input className={`input-basic ${className}`} ref={ref} {...rest} />;
  }
);

export default InputBasic;
