import React from 'react';
import { displayNumber } from 'utils';
import './card.css';
import { CardInput } from './card.type';

interface CardProps {
	input?: CardInput;
	isBigCard?: boolean;
	backgroundColor?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Card = ({
	input,
	isBigCard = false,
	backgroundColor,
	onClick,
}: CardProps) => {
	const mode =
		input && Object.values(input).length > 0 ? 'small-card' : 'empty-card';
	const newCard = typeof onClick === 'function' && !input && '+';

	return (
		<div className="card-box">
			<div
				className={`${isBigCard ? 'big-card' : mode} cursor-pointer`}
				style={{ backgroundColor }}
				onClick={onClick}
			>
				{newCard || (
					<>
						<div className="card-top">
							<span className="card-text">{input?.title}</span>
						</div>
						<div className="card-middle">
							<div className="small-card__chip"></div>
						</div>
						<div className="card-bottom">
							<div className="card-bottom__number">
								<span className="card-text">
									{input?.number
										? displayNumber({ input: input.number, startPoint: 2 })
										: input?.number}
								</span>
							</div>
							<div className="card-bottom__info">
								<span className="card-text ellipsis max-w-94">
									{input?.name || 'NAME'}
								</span>
								<span className="card-text">
									{`${input?.expiry || 'MM / YY'}`}
								</span>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card;
