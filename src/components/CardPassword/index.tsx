import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export const CardPassword = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['row-container']}>
      <Input
        type="password"
        value={cardInfo.password || ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, password: e.target.value })}
        maxLength={2}
        size="xsmall"
        label="카드 비밀번호"
      />
    </div>
  )
}
