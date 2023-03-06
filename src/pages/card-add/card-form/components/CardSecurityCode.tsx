import { RefObject } from 'react'

import { Input, InputTitle } from '@/components/input'

interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
}

const CardSecurityCode = ({ securityCodeRef }: CardSecurityCodeProps) => {
  return (
    <div className="input-container">
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <Input ref={securityCodeRef} type="password" maxLength={3} addtionalClassName="w-25" />
    </div>
  )
}

export default CardSecurityCode
