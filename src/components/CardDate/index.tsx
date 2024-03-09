import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

const MONTH_MAX = 12
const regx = new RegExp(/[0-9]/g)

export const CardDate = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['input-row-container']}>
      <Input
        type="text"
        value={cardInfo.month ?? ''}
        onChange={(e) => {
          const month = Number(e.target.value)

          if (e.target.value && !e.target.value.match(regx)) return
          if (e.target.value === '00') return

          if (month > MONTH_MAX) return
          updateCardInfo({ ...cardInfo, month: e.target.value })
        }}
        maxLength={2}
        placeholder="MM"
        label="만료일"
      />
      {cardInfo.month ? '/' : ''}
      <Input
        type="text"
        value={cardInfo.year ?? ''}
        onChange={(e) => {
          if (e.target.value && !e.target.value.match(regx)) return
          if (e.target.value === '00') return
          updateCardInfo({ ...cardInfo, year: e.target.value })
        }}
        maxLength={2}
        placeholder="YY"
      />
    </div>
  )
}
