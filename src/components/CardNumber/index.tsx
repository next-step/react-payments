import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

type CardNumber = {
  first?: number
  second?: number
  third?: number
  fourth?: number
}

export const CardNumber = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['input-row-container']}>
      <Input
        value={cardInfo.cardNumber?.first ?? ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, cardNumber: { ...cardInfo.cardNumber, first: e.target.value } })}
        type="text"
        maxLength={4}
        label="카드번호"
      />
      <span>-</span>
      <Input
        value={cardInfo.cardNumber?.second ?? ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, cardNumber: { ...cardInfo.cardNumber, second: e.target.value } })}
        type="text"
        maxLength={4}
        label=""
      />
      <span>-</span>
      <Input
        value={cardInfo.cardNumber?.third ?? ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, cardNumber: { ...cardInfo.cardNumber, third: e.target.value } })}
        type="password"
        maxLength={4}
        label=""
      />
      <span>-</span>
      <Input
        value={cardInfo.cardNumber?.fourth ?? ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, cardNumber: { ...cardInfo.cardNumber, fourth: e.target.value } })}
        type="password"
        maxLength={4}
        label=""
      />
    </div>
  )
}
