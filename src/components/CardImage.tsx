import { MouseEvent } from 'react';

import { CardInfo } from 'src/state/addCardMachine.ts';
import { CARD_COMPANY_MAP } from 'src/constants/card.ts';

interface CardImageProps
	extends Pick<
		CardInfo,
		| 'cardExpirationDate'
		| 'cardNumberFirstSegment'
		| 'cardNumberSecondSegment'
		| 'cardNumberThirdSegment'
		| 'cardNumberFourthSegment'
		| 'cardOwnerName'
		| 'cardCompanyCode'
	> {
	size?: 'small' | 'big';
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function CardImage({
	cardExpirationDate,
	cardNumberFirstSegment,
	cardNumberSecondSegment,
	cardNumberThirdSegment,
	cardNumberFourthSegment,
	cardOwnerName,
	cardCompanyCode,
	size = 'small',
	onClick,
}: CardImageProps) {
	const classNameBySize = {
		small: { card: 'small-card', chip: 'small-card__chip', text: 'card-text' },
		big: { card: 'big-card', chip: 'big-card__chip', text: 'card-text__big' },
	};

	return (
		<div className="card-box" onClick={onClick}>
			<div
				className={
					cardCompanyCode
						? `${classNameBySize[size].card} ${CARD_COMPANY_MAP[cardCompanyCode]?.className}`
						: `${classNameBySize[size].card} empty-card`
				}
				data-testid="card-image"
			>
				<div className="card-top">
					<div className={classNameBySize[size].text}>
						{cardCompanyCode ? CARD_COMPANY_MAP[cardCompanyCode]?.name : null}
					</div>
				</div>
				<div className="card-middle">
					<div className={classNameBySize[size].chip}></div>
				</div>
				<div className="card-bottom">
					<div className="card-bottom__number">
						<span className={classNameBySize[size].text}>
							{cardNumberFirstSegment} {cardNumberSecondSegment} {'∙'.repeat(cardNumberThirdSegment.length)}{' '}
							{'∙'.repeat(cardNumberFourthSegment.length)}
						</span>
					</div>
					<div className="card-bottom__info">
						<span className={classNameBySize[size].text}>{cardOwnerName || 'NAME'}</span>
						<span className={classNameBySize[size].text}>{cardExpirationDate || 'MM / YY'}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
