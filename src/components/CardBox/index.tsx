import { useContext } from 'react'
import { CardInfoContext } from '../../context/paymentContext'
import ui from '../../styles/index.module.css'

export const CardBox = () => {
  const cardInfo = useContext(CardInfoContext)

  return (
    <div className={ui['card-box']}>
      <div className={ui['empty-card']}>
        <div className={ui['card-top']}>{cardInfo.cardType}</div>
        <div className={ui['card-middle']}>
          <div className={ui['small-card__chip']}></div>
          <p>{cardInfo.cardNumber}</p>
        </div>
        <div className={ui['card-bottom']}>
          <div className={ui['card-bottom__info']}>
            <div>
              <span className={ui['card-text']}>{cardInfo.name || 'NAME'}</span>
              <span className={ui['card-text']}>MM / YY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
