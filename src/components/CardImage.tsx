import { CardInfo } from 'src/state/addCardMachine.ts';
import { getCardCompanyClassNameByCode, getCardCompanyNameByCode } from 'src/constants/card.ts';

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
}: CardImageProps) {
	const classNameBySize = {
		small: { card: 'small-card', chip: 'small-card__chip', text: 'card-text' },
		big: { card: 'big-card', chip: 'big-card__chip', text: 'card-text__big' },
	};

	return (
		<div className="card-box">
			<div
				className={
					cardCompanyCode
						? `${classNameBySize[size].card} ${getCardCompanyClassNameByCode(cardCompanyCode)}`
						: `${classNameBySize[size].card} empty-card`
				}
				data-testid="card-image"
			>
				<div className="card-top">
					<div className={classNameBySize[size].text}>
						{cardCompanyCode ? getCardCompanyNameByCode(cardCompanyCode) : null}
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
