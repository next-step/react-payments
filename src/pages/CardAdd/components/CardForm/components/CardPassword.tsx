import { Input, InputTitle, InputContainer } from '@/components/input'
import { useCardPassword } from '@/pages/CardAdd/components/CardForm/hooks'
import { CardPasswordProps, CardPasswordOrder } from '@/pages/CardAdd/components/CardForm/types'

const CardPassword = ({ passwordRef, handleChange }: CardPasswordProps) => {
  const onFocusChange = (order: CardPasswordOrder) => {
    passwordRef[order].current?.focus()
  }

  const { handleInputChange, openVirtualKeyboard } = useCardPassword({ passwordRef, handleChange, onFocusChange })

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
          onFocus={() => openVirtualKeyboard('first')}
        />
        <Input
          ref={passwordRef.second}
          data-name="second"
          addtionalClassName="w-15"
          type="password"
          maxLength={1}
          onInput={handleInputChange}
          onFocus={() => openVirtualKeyboard('second')}
        />
        <Input addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
        <Input addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </InputContainer>
  )
}

export default CardPassword
