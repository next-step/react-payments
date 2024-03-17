import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import ui from '../../styles/index.module.css'
import { Input } from '../common/Input'

export const CardNumber = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const handleInputChange = (key: string, value: string) => {
    return updateCardInfo({ ...cardInfo, cardNumber: { ...cardInfo.cardNumber, [key]: value } })
  }

  return (
    <div className={ui['row-container']}>
      <p className={ui['input-title']}>카드번호</p>
      <div className={ui['input-row-container']}>
        <Input
          value={cardInfo.cardNumber?.first ?? ''} //
          onChange={(e) => handleInputChange('first', e.target.value)}
          type="text"
          maxLength={4}
        />
        <span>-</span>
        <Input
          value={cardInfo.cardNumber?.second ?? ''} //
          onChange={(e) => handleInputChange('second', e.target.value)}
          type="text"
          maxLength={4}
        />
        <span>-</span>
        <Input
          value={cardInfo.cardNumber?.third ?? ''} //
          onChange={(e) => handleInputChange('third', e.target.value)}
          type="password"
          maxLength={4}
        />
        <span>-</span>
        <Input
          value={cardInfo.cardNumber?.fourth ?? ''} //
          onChange={(e) => handleInputChange('fourth', e.target.value)}
          type="password"
          maxLength={4}
        />
      </div>
    </div>
  )
}
