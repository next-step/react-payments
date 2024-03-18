export interface CardProps {
	variant: 'empty-card' | 'small-card' | 'big-card';
	children: React.ReactNode;
}

function CardMain({ variant, children }: CardProps) {
	return (
		<div className="card-box">
			<div className={variant}>{children}</div>
		</div>
	);
}

interface CardTopProps {
	children?: React.ReactNode;
}

function CardTop({ children }: CardTopProps) {
	return <div className="card-top">{children}</div>;
}

interface CardMiddleProps {
	children?: React.ReactNode;
}

function CardMiddle({ children }: CardMiddleProps) {
	return <div className="card-middle">{children}</div>;
}

interface CardBottomProps {
	children?: React.ReactNode;
}

function CardBottom({ children }: CardBottomProps) {
	return <div className="card-bottom">{children}</div>;
}

interface CardTextProps {
	text: string;
}

function CardText({ text }: CardTextProps) {
	return <p className="card-text">{text}</p>;
}

export const Card = Object.assign(CardMain, {
	Top: CardTop,
	Middle: CardMiddle,
	Bottom: CardBottom,
	Text: CardText,
});
