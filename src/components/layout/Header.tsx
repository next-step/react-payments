interface HeaderProps {
	title: string;
	children?: React.ReactNode;
}

export default function Header({ children, title }: HeaderProps) {
	return (
		<header className="header">
			{children}
			<h1 className="page-title">{title}</h1>
		</header>
	);
}
