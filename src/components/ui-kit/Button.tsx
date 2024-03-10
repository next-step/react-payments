interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | React.ReactNode;
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}
