import { useState } from 'react'
import { RegisteredDataType } from './RegistCard'
import CardBox from '../CardBox'

type RegistEndProps = {
	registCardInfo: RegisteredDataType
	handleSetCardName: (value: string) => void
	onPrev?: () => void
	onNext?: () => void
}
function RegistEnd(props: RegistEndProps) {
	const { registCardInfo, handleSetCardName, onNext } = props
	const [cardName, setCardName] = useState('')

	const onClickButtonNextHandler = () => {
		handleSetCardName(cardName ? cardName : registCardInfo.cardSelectionTypeName)
		onNext && onNext()
	}
	return (
		<div className="app flex-column-center">
			<div className="flex-center">
				<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
			</div>
			<CardBox
				cardName={cardName}
				ownerName={registCardInfo.ownerName}
				expirationDate={registCardInfo.expirationDate}
				cardNumber={registCardInfo.cardNumber}
				theme={registCardInfo.theme}
				cardSelectionTypeName={registCardInfo.cardSelectionTypeName}
			/>
			<div className="input-container flex-center w-100">
				<input
					className="input-underline w-75"
					type="text"
					placeholder="카드 별칭(선택)"
					onChange={(e) => {
						const { value } = e.target

						setCardName(value)
						// handleSetCardName(value)
					}}
				/>
			</div>
			<button onClick={onClickButtonNextHandler} className="button-box mt-50">
				<span className="button-text">다음</span>
			</button>
		</div>
	)
}

export default RegistEnd
