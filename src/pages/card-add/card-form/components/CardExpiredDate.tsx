import { BasicInput } from '@/components/input'
import { useCardExpiredDate } from '@/pages/card-add/card-form/hooks'
import { CardExpiredDateProps } from '@/pages/card-add/card-form/types'

const CardExpiredDate = ({ expiredYear, expiredMonth, handleChange }: CardExpiredDateProps) => {
  const { firstRef, secondRef, handleInputChange } = useCardExpiredDate({ expiredYear, expiredMonth, handleChange })

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <BasicInput
          inputRef={firstRef}
          placeHolder="MM"
          dataSet="MM"
          value={expiredMonth}
          onChange={handleInputChange}
        />
        {(expiredYear.length === 2 || expiredMonth.length === 2) && <span>/</span>}
        <BasicInput
          inputRef={secondRef}
          placeHolder="YY"
          dataSet="YY"
          value={expiredYear}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default CardExpiredDate
