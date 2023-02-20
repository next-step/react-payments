import { ChangeEvent } from 'react'

interface CardExpiredDateProps {
  expiratedYear: string
  expiratedMonth: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardExpiredDate = ({
  expiratedYear,
  expiratedMonth,
  handleChange,
}: CardExpiredDateProps) => {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          data-name="MM"
          value={expiratedMonth}
          onChange={handleChange}
        />
        {(expiratedYear.length === 2 || expiratedMonth.length === 2) && (
          <span>/</span>
        )}
        <input
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
export const CardExpiredDateType = (
  <CardExpiredDate
    expiratedYear=""
    expiratedMonth=""
    handleChange={() => {
      console.log()
    }}
  />
).type
