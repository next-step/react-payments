import { useMemo, useState } from 'react'
import { RegisterDataType } from './RegistCard'

type RegistEndProps = {
	registCardInfo: RegisterDataType
	onPrev?: (data?: any) => void
	onNext?: (data?: any) => void
}
function RegistEnd(props: RegistEndProps) {
	const { registCardInfo, onRrev, onNext } = props
	const [cardName, setCardName] = useState('')

	useMemo(() => {}, [registCardInfo])
	return (
		<div className="app flex-column-center">
			<div className="flex-center">
				<h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
			</div>
			<div className="card-box">
				<div className="big-card">
					<div className="card-top">
						<span className="card-text__big">{cardName}</span>
					</div>
					<div className="card-middle">
						<div className="big-card__chip"></div>
					</div>
					<div className="card-bottom">
						<div className="card-bottom__number">
							<span className="card-text__big">
								{registCardInfo.cardNumber || '1111 - 2222 - oooo - oooo'}
							</span>
						</div>
						<div className="card-bottom__info">
							<span className="card-text__big">
								{registCardInfo.ownerName || 'YUJO'}
							</span>
							<span className="card-text__big">
								{registCardInfo.expirationDate || '12 / 23'}
							</span>
						</div>
					</div>
				</div>
			</div>
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
			<div className="button-box mt-50">
				<span className="button-text">다음</span>
			</div>
		</div>
	)
}

export default RegistEnd
