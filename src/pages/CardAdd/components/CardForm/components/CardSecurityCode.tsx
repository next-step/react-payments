import { Input, InputTitle, InputContainer } from '@/components/input'
import { useCardSecurityCode } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardSecurityCodeProps } from '@/pages/CardAdd/components/CardForm/types'

const CardSecurityCode = ({ securityCodeRef, handleChange }: CardSecurityCodeProps) => {
  const { handleInputChange } = useCardSecurityCode({ handleChange })
  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <Input
        ref={securityCodeRef}
        type="password"
        maxLength={3}
        addtionalClassName="w-25"
        onInput={handleInputChange}
      />
    </InputContainer>
  )
}

export default CardSecurityCode
