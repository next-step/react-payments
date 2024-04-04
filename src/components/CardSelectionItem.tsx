import './CardSelectionItem.css'

type CardSelectionItemProps<T> = {
	theme: T
	name: string
	onClick?: () => void
}

function CardSelectionItem<T>(props: CardSelectionItemProps<T>) {
	const { theme, name, onClick } = props

	return (
		<div className="modal-item-container" onClick={onClick}>
			<div className={`modal-item-dot ${theme}-theme`}></div>
			<span className="modal-item-name">{name}</span>
		</div>
	)
}

export default CardSelectionItem
