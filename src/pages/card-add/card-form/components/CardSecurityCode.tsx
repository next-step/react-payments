import { RefObject } from 'react'

import { Input, InputTitle, InputContainer } from '@/components/input'

interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
}

const CardSecurityCode = ({ securityCodeRef }: CardSecurityCodeProps) => {
  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <Input ref={securityCodeRef} type="password" maxLength={3} addtionalClassName="w-25" />
    </InputContainer>
  )
}

export default CardSecurityCode
