import { forwardRef, ComponentPropsWithoutRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(({ children, ...props }, ref) => {
	return (
		<button ref={ref} {...props}>
			{children}
		</button>
	);
});

export default Button;
