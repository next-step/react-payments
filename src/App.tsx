import './App.css'
import useStepper from './hooks/useStepper'
import RegistCard, { RegisterDataType } from './components/page/RegistCard'
import Navigation from './components/navigation/navigation'
import RegistEnd from './components/page/RegistEnd'
import { useState } from 'react'

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

const INITIAL_CARD_STATE: RegisterDataType = {
	cardNumber: '',
	expirationDate: '',
	ownerName: '',
	placeholder: '',
	securityCode: '',
	secretCode: '',
}

function App() {
	const { step, setStep, Stepper, Step } = useStepper<Step>('카드추가')
	const [registerData, setRegisterData] = useState<RegisterDataType>(INITIAL_CARD_STATE)

	return (
		<div className="app" id="app">
			<Navigation currentStageName={step!}></Navigation>

			<Stepper>
				<Step name="카드추가">
					<RegistCard
						setRegisterData={setRegisterData}
						onPrev={() => setStep('카드목록')}
						onNext={() => setStep('카드등록완료')}
					/>
				</Step>
				<Step name="카드등록완료">
					<RegistEnd registCardInfo={registerData} />
				</Step>
			</Stepper>
		</div>
	)
}

export default App
