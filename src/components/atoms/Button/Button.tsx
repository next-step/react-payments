import { forwardRef, ButtonHTMLAttributes } from 'react';

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, disabled, children, ...rest }, ref) => {
  return (
    <button ref={ref} className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
});

export default Button;
