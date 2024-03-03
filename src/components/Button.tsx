import { forwardRef, ComponentPropsWithoutRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
	({ children, className = 'button-text', ...props }, ref) => {
		return (
			<button ref={ref} className={className} {...props}>
				{children}
			</button>
		);
	},
);

export default Button;
