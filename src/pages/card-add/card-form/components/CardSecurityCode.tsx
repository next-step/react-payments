import { RefObject } from 'react'

interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
}

const CardSecurityCode = ({ securityCodeRef }: CardSecurityCodeProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" ref={securityCodeRef} type="password" maxLength={3} />
    </div>
  )
}

export default CardSecurityCode
