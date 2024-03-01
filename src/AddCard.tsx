import { useContext, useState } from 'react'
import { CardInfoContext } from './context/paymentContext'
import { Button } from './stories/Button'
import { CardBox, CardCvc, CardName, CardNumber, CardPassword, CardType } from './components'
import ValidityInput from './components/common/ValidityDateInput'
import ui from './styles/index.module.css'

type StepProps = {
  onBack: () => void
  onNext: () => void
}
const AddCard = ({ onBack, onNext }: StepProps) => {
  const cardInfo = useContext(CardInfoContext)
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <main>
      <button onClick={() => onBack()}>뒤로가기</button>
      <h2>1️⃣ 카드 추가</h2>
      <div className={ui['root']}>
        <div className={ui['app']}>
          <h2 className={ui['page-title']}>카드 추가</h2>
          <CardBox />
          <CardNumber />
          <div className={ui['input-container']}>
            <span className={ui['input-title']}>만료일</span>
            <div className={`${ui['input-box']} ${ui['w-50']}`}>
              <ValidityInput />
              {/* <input className={ui['input-basic']} type={ui['text" placeholder=MM />
              <input className={ui['input-basic']} type={ui['text" placeholder=YY /> */}
            </div>
          </div>
          <CardName />
          <CardCvc />
          <CardPassword />
          <div className={ui['button-box']}>
            <Button
              primary
              size="small"
              backgroundColor="#efefef"
              onClick={() => {
                if (cardInfo.cardType) onNext()
                else setIsShowModal((state) => !state)
              }}
              label="다음"
            ></Button>
          </div>
        </div>
      </div>
      {isShowModal && <CardType setIsShowModal={() => setIsShowModal(false)} />}
    </main>
  )
}

export default AddCard
