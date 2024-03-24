import { MouseEvent, CSSProperties } from 'react';

import { CardInfo } from 'src/types/card.type';
import { CARD_COMPANY_MAP } from 'src/constants/card';

export interface CardImageProps
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
	styles?: {
		card?: CSSProperties;
		chip?: CSSProperties;
		text?: CSSProperties;
		container?: CSSProperties;
	};
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
	styles,
}: CardImageProps) {
	const classNameBySize = {
		small: { card: 'small-card', chip: 'small-card__chip', text: 'card-text' },
		big: { card: 'big-card', chip: 'big-card__chip', text: 'card-text__big' },
	};

	return (
		<div className="card-box" onClick={onClick} style={styles?.container}>
			<div
				className={
					cardCompanyCode
						? `${classNameBySize[size].card} ${CARD_COMPANY_MAP[cardCompanyCode]?.className}`
						: `${classNameBySize[size].card} empty-card`
				}
				data-testid="card-image"
				style={styles?.card}
			>
				<div className="card-top">
					<div className={classNameBySize[size].text} style={styles?.text}>
						{cardCompanyCode ? CARD_COMPANY_MAP[cardCompanyCode]?.name : null}
					</div>
				</div>
				<div className="card-middle">
					<div className={classNameBySize[size].chip} style={styles?.chip}></div>
				</div>
				<div className="card-bottom">
					<div className="card-bottom__number">
						<span className={classNameBySize[size].text} style={styles?.text}>
							{cardNumberFirstSegment} {cardNumberSecondSegment} {'∙'.repeat(cardNumberThirdSegment.length)}{' '}
							{'∙'.repeat(cardNumberFourthSegment.length)}
						</span>
					</div>
					<div className="card-bottom__info">
						<span className={classNameBySize[size].text} style={styles?.text}>
							{cardOwnerName || 'NAME'}
						</span>
						<span className={classNameBySize[size].text} style={styles?.text}>
							{cardExpirationDate || 'MM / YY'}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
