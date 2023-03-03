import { useEffect, useRef, ChangeEvent } from 'react'

import { useCardInfo } from '../hooks'

interface CardSecurityCode {
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardSecurityCode = () => {
  const { handleSecurityCode } = useCardInfo()
  const securityCodeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    handleSecurityCode(securityCodeRef)
  }, [handleSecurityCode, securityCodeRef])

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" ref={securityCodeRef} type="password" maxLength={3} />
    </div>
  )
}

export default CardSecurityCode
