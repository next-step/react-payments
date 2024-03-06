import { useAddCardMachineSelector } from 'src/state/addCardMachine.ts';

export default function CardImage() {
	const {
		cardExpirationDate,
		cardNumberFirstSegment,
		cardNumberSecondSegment,
		cardNumberThirdSegment,
		cardNumberFourthSegment,
		cardOwnerName,
	} = useAddCardMachineSelector(state => state.context.cardInfo);

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
							{cardNumberFirstSegment} {cardNumberSecondSegment} {'o'.repeat(cardNumberThirdSegment.length)}{' '}
							{'o'.repeat(cardNumberFourthSegment.length)}
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
