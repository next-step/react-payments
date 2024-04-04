import '../../../styles/modal.css'
import CardSelectionItem from '../CardSelectionItem'

type ModelProps = {
	onNext: () => void
	setModalInfo?: (itemInfo: CardItemType<ThemeColorType>) => void
}

export type ThemeColorType = 'red' | 'pink' | 'orange' | 'green' | 'blue' | 'yellow' | ''

export type CardItemType<T> = {
	name: string
	theme: T
}
// mock: cardItem data
const CARD_LIST: Array<CardItemType<ThemeColorType>> = [
	{
		name: '롯데 카드',
		theme: 'yellow',
	},
	{
		name: '신한 카드',
		theme: 'blue',
	},
	{
		name: '국민 카드',
		theme: 'orange',
	},
	{
		name: '농협 카드',
		theme: 'green',
	},
]

function Modal(props: ModelProps) {
	const nextHandler = (itemInfo: CardItemType<ThemeColorType>) => {
		props.setModalInfo && props.setModalInfo(itemInfo)
		props.onNext()
	}
	return (
		<div className="modal-dimmed">
			<div className="modal">
				<div className="flex-center">
					{CARD_LIST.map((item: CardItemType<ThemeColorType>) => (
						<button onClick={() => nextHandler(item)}>
							<CardSelectionItem theme={item.theme} name={item.name} />
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Modal
