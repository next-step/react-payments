import { forwardRef, ComponentPropsWithoutRef } from 'react';

const H1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h1'>>(({ children, ...props }, ref) => {
	return (
		<h1 ref={ref} {...props}>
			{children}
		</h1>
	);
});

const H2 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h2'>>(({ children, ...props }, ref) => {
	return (
		<h2 ref={ref} {...props}>
			{children}
		</h2>
	);
});

const H3 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h3'>>(({ children, ...props }, ref) => {
	return (
		<h3 ref={ref} {...props}>
			{children}
		</h3>
	);
});

const H4 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h4'>>(({ children, ...props }, ref) => {
	return (
		<h4 ref={ref} {...props}>
			{children}
		</h4>
	);
});

const H5 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h5'>>(({ children, ...props }, ref) => {
	return (
		<h5 ref={ref} {...props}>
			{children}
		</h5>
	);
});

const H6 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h6'>>(({ children, ...props }, ref) => {
	return (
		<h6 ref={ref} {...props}>
			{children}
		</h6>
	);
});

const Heading = {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
};

export default Heading;
