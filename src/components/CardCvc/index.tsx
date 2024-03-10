import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export const CardCvc = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['row-container']}>
      <Input
        type="password"
        value={cardInfo.cvc || ''}
        onChange={(e) => {
          updateCardInfo({ ...cardInfo, cvc: e.target.value })
        }}
        maxLength={3}
        size="small"
        label="보안코드(CVC/CVV)"
      />
    </div>
  )
}
