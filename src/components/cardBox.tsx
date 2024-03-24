type CardProps = {
	size?: 'small' | 'big'
	cardName?: string
	ownerName?: string
	expirationDate?: string
	cardNumber?: string
}

const CardBox = (props: CardProps) => {
	const { size = 'small', cardName, ownerName, expirationDate, cardNumber } = props
	// const [expirationMonth, expirationYear] = expirationDate || ['MM', 'YY']
	const isBig = (): boolean => {
		return size === 'big'
	}
	return (
		<div className="card-box">
			<div className={isBig() ? 'big-card' : 'empty-card'}>
				<div className="card-top">
					<span className="card-text">{cardName}</span>
				</div>
				<div className="card-middle">
					<div className={isBig() ? 'big-card__chip' : 'small-card__chip'}></div>
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
