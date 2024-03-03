import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';
import useCardOwnerNameInput from 'src/hooks/useCardOwnerNameInput.ts';
import useExpirationDateInput from 'src/hooks/useExpirationDateInput.ts';

interface CardImageProps
	extends Pick<ReturnType<typeof useExpirationDateInput>, 'expirationDate'>,
		Pick<ReturnType<typeof useCardNumberInput>, 'firstSegment' | 'secondSegment' | 'thirdSegment' | 'fourthSegment'>,
		Pick<ReturnType<typeof useCardOwnerNameInput>, 'cardOwnerName'> {}

export default function CardImage({
	expirationDate,
	firstSegment,
	secondSegment,
	thirdSegment,
	fourthSegment,
	cardOwnerName,
}: CardImageProps) {
	return (
		<div className="card-box">
			<div className="empty-card">
				<div className="card-top"></div>
				<div className="card-middle">
					<div className="small-card__chip"></div>
				</div>
				<div className="card-bottom">
					<div className="card-bottom__number">
						<span className="card-text">
							{firstSegment} {secondSegment} {'o'.repeat(thirdSegment.length)} {'o'.repeat(fourthSegment.length)}
						</span>
					</div>
					<div className="card-bottom__info">
						<span className="card-text">{cardOwnerName || 'NAME'}</span>
						<span className="card-text">{expirationDate || 'MM / YY'}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
