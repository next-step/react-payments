type InputProps = {
	className: string;
	type: string;
	value: string;
	name: string;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({className, type, value, name, placeholder, onChange}: InputProps) {
	return (
		<input
			className={className}
			type={type}
			value={value}
			name={name}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}
