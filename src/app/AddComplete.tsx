import { useContext } from 'react'
import ui from '../styles/index.module.css'
import { UpdateFunnelStepContext } from '../context/funnelStepContext'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { Input } from '../stories/Input'

const AddComplete = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const updateFunnelStep = useContext(UpdateFunnelStepContext)
  return (
    <main>
      <h2>4️⃣ 카드 추가 완료</h2>
      <div className={ui['root']}>
        <div className={`${ui['app']} ${ui['flex-column-center']}`}>
          <div className={ui['flex-column-center']}>
            <h2 className={`${ui['page-title']} ${ui['mb-10']}`}>카드등록이 완료되었습니다.</h2>
          </div>
          <div className={ui['card-box']}>
            <div className={ui['big-card']}>
              <div className={ui['card-top']}>
                <span className={ui['card-text__big']}>{cardInfo.cardType}</span>
              </div>
              <div className={ui['card-middle']}>
                <div className={ui['big-card__chip']}></div>
              </div>
              <div className={ui['card-bottom']}>
                <div className={ui['card-bottom__number']}>
                  <span className={ui['card-text__big']}>{`${cardInfo.cardNumber?.first} - ${cardInfo.cardNumber?.second} - ${cardInfo.cardNumber?.third} -${cardInfo.cardNumber?.fourth}`}</span>
                </div>
                <div className={ui['card-bottom__info']}>
                  <span className={ui['card-text__big']}>{cardInfo.name}</span>
                  <span className={ui['card-text__big']}>{`${cardInfo.month} / ${cardInfo.year}`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${ui['input-container']} ${ui['flex-column-center']} ${ui['w-100']}`}>
            {/* <input className={`${ui['input-underline']} ${ui['w-75']}`} type="text" placeholder="카드의 별칭을 입력해주세요." /> */}
            {/* <Input
              type="text"
              value={cardInfo.cardAlias || ''} //
              onChange={(e) => updateCardInfo({ ...cardInfo, cardAlias: e.target.value })}
              placeholder="카드의 별칭을 입력해주세요"
              maxLength={30}
            /> */}
          </div>
          <div className={`${ui['button-box']} ${ui['mt-50']}`}>
            <button className={ui['button-text']} onClick={() => updateFunnelStep({ step: 'list' })}>
              확인
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddComplete
