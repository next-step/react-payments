import { useContext } from 'react'
import { CardInfo, CardInfoContext } from '../../context/paymentContext'
import { checkAllMasking } from '../../utils/check'
import ui from '../../styles/index.module.css'

export const CardBox = ({ card }: { card?: CardInfo }) => {
  const cardInfo = useContext(CardInfoContext)

  const cardNumberValue = () => {
    const cardNumber = cardInfo.cardNumber || card?.cardNumber
    return {
      first: cardNumber?.first || '',
      second: cardNumber?.second || '',
      third: cardNumber?.third ? checkAllMasking(cardNumber.third, cardNumber.third.length) : '',
      fourth: cardNumber?.fourth ? checkAllMasking(cardNumber.fourth, cardNumber.fourth.length) : '',
    }
  }
  return (
    <div className={ui['card-box']}>
      <div className={ui[`${'empty-card'}`]}>
        <div className={ui['card-top']}>{cardInfo.cardType ? cardInfo.cardType + '카드' : card ? card.cardType + '카드' : ''}</div>
        <div className={ui['card-middle']}>
          <div className={ui[`${cardInfo ? 'big-card__chip' : 'small-card__chip'}`]}></div>
          <p>{` 
          ${cardNumberValue().first} ${cardNumberValue().second} ${cardNumberValue().third} ${cardNumberValue().fourth}
          `}</p>
        </div>
        <div className={ui['card-bottom']}>
          <div className={ui['card-bottom__info']}>
            <div>
              <span className={ui['card-text']}>{card?.name ? card.name : cardInfo.name || 'NAME'}</span>
              <span className={ui['card-text']}>
                {card?.month ? card.month : cardInfo.month || 'MM'} / {card?.year ? card.year : cardInfo.year || 'YY'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
