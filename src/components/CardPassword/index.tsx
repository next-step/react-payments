import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { checkAllMasking } from '../../utils/check'
import { Input } from '../../stories/Input'

export const CardPassword = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)
  return (
    <Input
      type="password"
      value={cardInfo.password ? checkAllMasking(cardInfo.password, cardInfo.password.length)?.join() : ''} //
      onChange={(e) => updateCardInfo({ ...cardInfo, password: e.target.value })}
      maxLength={2}
      size="xsmall"
      label="카드 비밀번호"
    />
  )
}
