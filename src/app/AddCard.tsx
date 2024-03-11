import { useContext, useState } from 'react'
import { CardInfoContext } from '../context/paymentContext'
import { CardBox, CardCvc, CardName, CardNumber, CardPassword, CardType, CardDate } from '../components'
import { UpdateFunnelStepContext } from '../context/funnelStepContext'
import ui from '../styles/index.module.css'

const AddCard = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateFunnelStep = useContext(UpdateFunnelStepContext)

  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <main>
      <h2>1️⃣ 카드 추가</h2>
      <div className={ui['root']}>
        <div className={ui['app']}>
          <h2 className={ui['page-title']}>
            <button onClick={() => updateFunnelStep({ step: 'list' })}>&lt;</button>
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
                if (cardInfo.cardType) updateFunnelStep({ step: 'complete' })
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
