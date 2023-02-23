import { useRef, ChangeEvent } from 'react'

import { useInputFocus } from '@/pages/card-add/card-form/hooks'

interface CardExpiredDateProps {
  expiratedYear: string
  expiratedMonth: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardExpiredDate = ({ expiratedYear, expiratedMonth, handleChange }: CardExpiredDateProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  useInputFocus([
    { ref: firstRef, maxLength: 2 },
    { ref: secondRef, maxLength: 2 },
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
          data-name="MM"
          value={expiratedMonth}
          onChange={handleChange}
        />
        {(expiratedYear.length === 2 || expiratedMonth.length === 2) && <span>/</span>}
        <input
          ref={secondRef}
          className="input-basic"
          type="text"
          placeholder="YY"
          data-name="YY"
          value={expiratedYear}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CardExpiredDate
