import { Input, InputTitle, InputContainer } from '@/components/input'
import { useCardPassword } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardPasswordProps } from '@/pages/CardAdd/components/CardForm/types'

const CardPassword = ({ passwordRef, handleChange }: CardPasswordProps) => {
  const { handleInputChange } = useCardPassword({ passwordRef, handleChange })

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <div className="input-password-container">
        <Input
          ref={passwordRef.first}
          data-name="first"
          addtionalClassName="w-15"
          type="password"
          maxLength={1}
          onInput={handleInputChange}
        />
        <Input
          ref={passwordRef.second}
          data-name="second"
          addtionalClassName="w-15"
          type="password"
          maxLength={1}
          onInput={handleInputChange}
        />
        <Input addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
        <Input addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </InputContainer>
  )
}

export default CardPassword
