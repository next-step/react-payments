import { forwardRef, ComponentPropsWithoutRef } from 'react';

const Text = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(({ children, ...props }, ref) => {
	return (
		<div ref={ref} {...props}>
			{children}
		</div>
	);
});

export default Text;
