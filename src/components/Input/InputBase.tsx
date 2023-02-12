import { forwardRef, InputHTMLAttributes, memo } from 'react';

const InputBase = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <div className="input-wrapper">
      <input ref={ref} className={`input-basic ${className}`.trim()} {...props} />
      <span className="underline" />
    </div>
  ),
);

export default memo(InputBase);
