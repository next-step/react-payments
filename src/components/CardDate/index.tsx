import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import ui from '../../styles/index.module.css'
import { Input } from '../common/Input'

const MONTH_MAX = 12
const regx = new RegExp(/[0-9]/g)

export const CardDate = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['row-container']}>
      <p className={'input-title'}>만료일</p>
      <div className={`${ui['input-row-container']} ${ui['w-50']}`}>
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
    </div>
  )
}
