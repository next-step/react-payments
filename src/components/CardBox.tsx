import './CardSelectionItem.css'
type CardProps<T> = {
	cardNickName?: string
	cardName?: string
	ownerName?: string
	expirationDate?: string
	cardNumber?: string
	onClick?: () => void
	theme?: T
	cardSelectionTypeName?: string
}

const CardBox = <T,>(props: CardProps<T>) => {
	const { ownerName, expirationDate, cardNumber, onClick, theme, cardSelectionTypeName } = props

	return (
		<div className="card-box" onClick={onClick}>
			<div className={`empty-card ${theme}-theme`}>
				<div className="card-top">
					<span className="card-text">{cardSelectionTypeName}</span>
				</div>
				<div className="card-middle">
					<div className={'big-card__chip'}></div>
				</div>
				<div className="card-bottom">
					<div className="card-bottom__number">
						<span className="card-text">
							{cardNumber &&
								cardNumber.replace(/(.{4})(.{4})(.{4})(.{4})/, '$1-$2-$3-$4')}
						</span>
					</div>
					<div className="card-bottom__info">
						<span className="card-text">{ownerName || 'NAME'}</span>
						<span className="card-text">{expirationDate || 'MM/YY'}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardBox
