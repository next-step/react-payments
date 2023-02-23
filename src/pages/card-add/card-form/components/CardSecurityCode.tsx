import { ChangeEvent } from 'react'

interface CardSecurityCode {
  securityCode: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardSecurityCode = ({ securityCode, handleChange }: CardSecurityCode) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={securityCode}
        onChange={handleChange}
      />
    </div>
  )
}

export default CardSecurityCode
export const CardSecurityCodeType = (
  <CardSecurityCode
    securityCode=""
    handleChange={(_: ChangeEvent<HTMLInputElement>) => _}
  />
).type
