import { useMemo, useState } from 'react'
import { RegisterDataType } from './RegistCard'
import CardBox from '../CardBox'

type RegistEndProps = {
	registCardInfo: RegisterDataType
	handleSetCardName: (value: string) => void
	onPrev?: () => void
	onNext?: () => void
}
function RegistEnd(props: RegistEndProps) {
	const { registCardInfo, handleSetCardName, onNext } = props
	const [cardName, setCardName] = useState('')

	useMemo(() => {}, [registCardInfo])

	const onClickButtonNextHandler = () => {
		onNext && onNext()
		handleSetCardName(cardName)
	}
	return (
		<div className="app flex-column-center">
			<div className="flex-center">
				<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
			</div>
			<CardBox
				size="big"
				cardName={cardName}
				ownerName={registCardInfo.ownerName}
				expirationDate={registCardInfo.expirationDate}
				cardNumber={registCardInfo.cardNumber}
			/>
			<div className="input-container flex-center w-100">
				<input
					className="input-underline w-75"
					type="text"
					placeholder="카드의 별칭을 입력해주세요."
					onChange={(e) => {
						const { value } = e.target

						setCardName(value)
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
