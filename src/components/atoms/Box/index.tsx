import { ComponentProps, forwardRef } from 'react';

const Box = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ children, className, ...restProps }, ref) => {
  return (
    <div className={className} {...restProps} ref={ref}>
      {children}
    </div>
  );
});

export default Box;
