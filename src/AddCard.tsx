import { useContext, useState } from 'react'
import { CardInfoContext } from './context/paymentContext'
import { CardBox, CardCvc, CardName, CardNumber, CardPassword, CardType, CardDate } from './components'
import ui from './styles/index.module.css'

type AddCardProps = {
  onBack: () => void
  onNext: () => void
}
const AddCard = ({ onBack, onNext }: AddCardProps) => {
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
          <CardDate />
          <CardName />
          <CardCvc />
          <CardPassword />
          <div className={ui['button-box']}>
            <button
              onClick={() => {
                if (cardInfo.cardType) onNext()
                else setIsShowModal((state) => !state)
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
      {isShowModal && <CardType closeModal={() => setIsShowModal(false)} />}
    </main>
  )
}

export default AddCard
