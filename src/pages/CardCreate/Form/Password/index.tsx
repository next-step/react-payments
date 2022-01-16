import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import Styled from './index.style'

type CardPasswordHandle = {
  password1: () => string
  password2: () => string
}

const CardPasswordInput = forwardRef<CardPasswordHandle, {}>((props, ref) => {
  const inputPassword1 = useRef<FormInputElementRef | null>(null)
  const inputPassword2 = useRef<FormInputElementRef | null>(null)

  useImperativeHandle(ref, () => ({
    password1() {
      return inputPassword1.current?.value() ?? ''
    },
    password2() {
      return inputPassword2.current?.value() ?? ''
    },
  }))

  return (
    <FormArea label="카드 비밀번호">
      <Styled.PasswordContainer>
        <Styled.PasswordInputContainer>
          <FormInput type="password" ref={inputPassword1} maxLength={1} />
        </Styled.PasswordInputContainer>
        <Styled.PasswordInputContainer>
          <FormInput type="password" ref={inputPassword1} maxLength={1} />
        </Styled.PasswordInputContainer>
        <Styled.PasswordInputContainer>
          <FormInput
            type="password"
            ref={inputPassword1}
            value={'0'}
            backgroundColor="white"
          />
        </Styled.PasswordInputContainer>
        <Styled.PasswordInputContainer>
          <FormInput
            type="password"
            ref={inputPassword1}
            value={'0'}
            backgroundColor="white"
          />
        </Styled.PasswordInputContainer>
      </Styled.PasswordContainer>
    </FormArea>
  )
})

export default React.memo(CardPasswordInput)
