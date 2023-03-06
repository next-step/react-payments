import { useRef, ChangeEvent } from 'react'

import { BasicInput } from '@/components/input'
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

  const handleCardExpiredDateInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'YY':
        handleChange({ value, yymm: name })
        break
      case 'MM':
        handleChange({ value, yymm: name })
        break
    }
  }

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <BasicInput
          inputRef={firstRef}
          placeHolder="MM"
          dataSet="MM"
          value={expiredMonth}
          onChange={handleCardExpiredDateInputChange}
        />
        {(expiredYear.length === 2 || expiredMonth.length === 2) && <span>/</span>}
        <BasicInput
          inputRef={secondRef}
          placeHolder="YY"
          dataSet="YY"
          value={expiredYear}
          onChange={handleCardExpiredDateInputChange}
        />
      </div>
    </div>
  )
}

export default CardExpiredDate
