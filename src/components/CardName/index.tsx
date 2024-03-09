import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export const CardName = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['input-container']}>
      <p>
        <span className={ui['input-title']}>카드 소유자 이름(선택)</span>
        <span>{cardInfo.name ? cardInfo.name.length : 0}/30</span>
      </p>

      <Input
        type="text"
        value={cardInfo.name || ''} //
        onChange={(e) => updateCardInfo({ ...cardInfo, name: e.target.value })}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        maxLength={30}
      />
    </div>
  )
}
