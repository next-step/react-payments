import { useRef, ChangeEvent } from 'react'

interface CardSecurityCode {
  securityCode: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardSecurityCode = ({ handleChange }: CardSecurityCode) => {
  const securityCodeRef = useRef<HTMLInputElement>(null)

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" ref={securityCodeRef} type="password" onChange={handleChange} maxLength={3} />
    </div>
  )
}

export default CardSecurityCode
