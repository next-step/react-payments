import './App.css'
import useStepper from './hooks/useStepper'
import RegistCard, { RegisteredDataType } from './components/page/RegistCard'
import Navigation from './components/navigation/navigation'
import RegistEnd from './components/page/RegistEnd'
import { useState } from 'react'
import CardBox from './components/CardBox'

/**
 * step 관리
 * 1) 카드 추가
 * 2) 카드사 선택
 * 3) 입력 완료
 * 4) 카드 추가 완료
 * 5) 카드 목록
 * @returns
 */

type Step = '카드목록' | '카드추가' | '카드등록완료'

const INITIAL_CARD_STATE: RegisteredDataType = {
	cardNumber: '',
	expirationDate: '',
	ownerName: '',
	securityCode: '',
	secretCode: '',
	cardSelectionTypeName: '',
}

function App() {
	const { step, setStep, Stepper, Step } = useStepper<Step>('카드추가')
	const [registeredData, setRegisteredData] = useState<RegisteredDataType>(INITIAL_CARD_STATE)
	const [cardName, setCardName] = useState<string>(registeredData.cardSelectionTypeName)
	const [cardList, setCardList] = useState<Map<string, RegisteredDataType>>(new Map())

	const addMapElement = () => {
		const newMap = new Map(cardList)

		newMap.set(cardName, registeredData)
		setCardList(newMap)
	}

	return (
		<div className="app" id="app">
			<Navigation currentStageName={step}></Navigation>

			<Stepper>
				<Step name="카드목록">
					<button className="card-add-button" onClick={() => setStep('카드추가')}>
						+
					</button>
					{[...cardList].map(([key, value]) => (
						<>
							<CardBox
								ownerName={value.ownerName}
								expirationDate={value.expirationDate}
								cardNumber={value.cardNumber}
								theme={value.theme}
								cardSelectionTypeName={value.cardSelectionTypeName}
							/>
							<div>{key}</div>
						</>
					))}
				</Step>
				<Step name="카드추가">
					<RegistCard
						setRegisterData={setRegisteredData}
						onPrev={() => setStep('카드목록')}
						onNext={() => setStep('카드등록완료')}
					/>
				</Step>
				<Step name="카드등록완료">
					<RegistEnd
						handleSetCardName={setCardName}
						registCardInfo={registeredData}
						onNext={() => {
							addMapElement()
							setStep('카드목록')
						}}
					/>
				</Step>
			</Stepper>
		</div>
	)
}

export default App
