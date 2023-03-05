import { useRef } from 'react'

import { useSequentialInputFocus } from '@/pages/hooks'

type HandleExpiredDateProps = {
  value: string
  yymm: 'YY' | 'MM'
}
interface CardExpiredDateProps {
  expiredYear: string
  expiredMonth: string
  handleChange({ value, yymm }: HandleExpiredDateProps): void
}

const CardExpiredDate = ({ expiredYear, expiredMonth, handleChange }: CardExpiredDateProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstRef, isFocus: expiredMonth.length === 2 },
    { ref: secondRef, isFocus: expiredYear.length === 2 },
  ])
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          ref={firstRef}
          className="input-basic"
          type="text"
          placeholder="MM"
          value={expiredMonth}
          onChange={(event) => handleChange({ value: event.target.value, yymm: 'MM' })}
        />
        {(expiredYear.length === 2 || expiredMonth.length === 2) && <span>/</span>}
        <input
          ref={secondRef}
          className="input-basic"
          type="text"
          placeholder="YY"
          value={expiredYear}
          onChange={(event) => handleChange({ value: event.target.value, yymm: 'YY' })}
        />
      </div>
    </div>
  )
}

export default CardExpiredDate
