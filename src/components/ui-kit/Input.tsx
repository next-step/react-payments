type InputType = 'basic' | 'underline' | 'empty';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	variant: InputType;
	width?: string;
	label?: React.ReactNode;
	children?: React.ReactNode;
}

function InputMain({
	variant,
	width = '100%',
	label,
	children,
	...rest
}: InputProps) {
	const isWithInputBox = variant === 'basic';
	return (
		<>
			{label}
			<div
				style={{
					display: children ? 'flex' : 'block',
					alignItems: 'center',
					gap: children ? '8px' : '0',
				}}
			>
				<div className={isWithInputBox ? 'input-box' : ''} style={{ width }}>
					<input
						className={`input-${variant}`}
						style={{ width: isWithInputBox ? '100%' : width }}
						{...rest}
					/>
				</div>
				{children}
			</div>
		</>
	);
}

interface LabelProps {
	label: string;
	children?: React.ReactNode;
}

function Label({ label, children }: LabelProps) {
	return (
		<label className="input-title">
			{label}
			<div>{children}</div>
		</label>
	);
}

interface WrapperProps {
	children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
	return <div className="input-container">{children}</div>;
}

export const Input = Object.assign(InputMain, { Label, Wrapper });
