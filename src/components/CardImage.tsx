import { useAddCardMachineSelector } from 'src/state/addCardMachine.ts';
import { getCardCompanyClassNameByCode } from 'src/constants/card.ts';

export default function CardImage() {
	const {
		cardExpirationDate,
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardOwnerName,
		cardCompanyCode,
	} = useAddCardMachineSelector(state => state.context.cardInfo);

	return (
		<div className="card-box">
			<div className={cardCompanyCode ? `small-card ${getCardCompanyClassNameByCode(cardCompanyCode)}` : 'empty-card'}>
				<div className="card-top"></div>
				<div className="card-middle">
					<div className="small-card__chip"></div>
				</div>
				<div className="card-bottom">
					<div className="card-bottom__number">
						<span className="card-text">
							{cardNumberFirstSegment} {cardNumberSecondSegment} {'∙'.repeat(cardNumberThirdSegment.length)}{' '}
							{'∙'.repeat(cardNumberFourthSegment.length)}
						</span>
					</div>
					<div className="card-bottom__info">
						<span className="card-text">{cardOwnerName || 'NAME'}</span>
						<span className="card-text">{cardExpirationDate || 'MM / YY'}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
