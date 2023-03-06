import { Input, InputTitle } from '@/components/input'
import { useCardExpiredDate } from '@/pages/card-add/card-form/hooks'
import { CardExpiredDateProps } from '@/pages/card-add/card-form/types'

const CardExpiredDate = ({ expiredYear, expiredMonth, handleChange }: CardExpiredDateProps) => {
  const { firstRef, secondRef, handleInputChange } = useCardExpiredDate({ expiredYear, expiredMonth, handleChange })

  return (
    <div className="input-container">
      <InputTitle>만료일</InputTitle>
      <div className="input-box w-50">
        <Input ref={firstRef} placeholder="MM" data-name="MM" value={expiredMonth} onChange={handleInputChange} />
        {(expiredYear.length === 2 || expiredMonth.length === 2) && <span>/</span>}
        <Input ref={secondRef} placeholder="YY" data-name="YY" value={expiredYear} onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default CardExpiredDate
