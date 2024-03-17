import { useContext, useState } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { CardBox, CardCvc, CardName, CardNumber, CardPassword, CardType, CardDate } from '../components'
import { StepProps } from './Payments'
import { CardListContext } from '../context/cardListContext'
import ui from '../styles/index.module.css'

const AddCard = ({ onStep }: StepProps) => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const cardList = useContext(CardListContext)

  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <main>
      <h2>1️⃣ 카드 추가</h2>
      <div className={ui['root']}>
        <div className={ui['app']}>
          <h2 className={ui['page-title']}>
            <button onClick={() => onStep && onStep({ step: 'list' })}>&lt;</button>
            &nbsp; 카드 추가
          </h2>
          <CardBox />
          <CardNumber />
          <CardDate />
          <CardName />
          <CardCvc />
          <CardPassword />
          <div className={ui['button-box']}>
            <button
              onClick={() => {
                if (!cardInfo.cardType) return setIsShowModal((state) => !state)

                updateCardInfo({ ...cardInfo, cardNo: cardList.length || 0 })
                if (onStep) onStep({ step: 'complete' })
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
