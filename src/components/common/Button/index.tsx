import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	backgroundColor?: string;
	color?: string;
	label: string;
	onClick?: () => void;
}

const Button = ({
	className,
	backgroundColor = "white",
	color = "black",
	type = "button",
	label,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`button ${className}`}
			type={type}
			style={{ backgroundColor, color }}
			{...props}
		>
			{label}
		</button>
	);
};

export default Button;
