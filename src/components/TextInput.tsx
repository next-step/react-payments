import { ComponentPropsWithoutRef, forwardRef } from 'react';

export interface TextInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
	type?: 'text' | 'password';
	testId?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	({ className = 'input-basic', testId, ...props }, ref) => {
		return <input data-testid={testId} ref={ref} className={className} {...props} />;
	},
);

export default TextInput;
