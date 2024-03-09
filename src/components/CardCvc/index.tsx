import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { checkAllMasking } from '../../utils/check'
import { Input } from '../../stories/Input'

export const CardCvc = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)
  return (
    <Input
      type="text"
      value={cardInfo.cvc ? checkAllMasking(cardInfo.cvc, cardInfo.cvc.length)?.join() : ''} //
      onChange={(e) => updateCardInfo({ ...cardInfo, cvc: e.target.value })}
      maxLength={3}
      size="small"
      label="보안코드(CVC/CVV)"
    />
  )
}
