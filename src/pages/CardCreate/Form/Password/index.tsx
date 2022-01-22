import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { FormInputProps } from '..'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { CREATE_CARD_PASSWORD1, CREATE_CARD_PASSWORD2 } from '../constants/id'
import Styled from './index.style'

type CardPasswordHandle = {
  password1: () => string
  password2: () => string
}

const CardPasswordInput = forwardRef<CardPasswordHandle, FormInputProps>(
  (props, ref) => {
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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.value.length === 1) {
        document.getElementById(CREATE_CARD_PASSWORD2)?.focus()
      }
    }

    return (
      <FormArea label="카드 비밀번호" errorMessage={props.errorMessage}>
        <Styled.PasswordContainer>
          <Styled.PasswordInputContainer>
            <FormInput
              id={CREATE_CARD_PASSWORD1}
              type="password"
              ref={inputPassword1}
              maxLength={1}
              onChange={onChange}
            />
          </Styled.PasswordInputContainer>
          <Styled.PasswordInputContainer>
            <FormInput
              id={CREATE_CARD_PASSWORD2}
              type="password"
              ref={inputPassword1}
              maxLength={1}
            />
          </Styled.PasswordInputContainer>
          <Styled.PasswordInputContainer>
            <FormInput type="password" value={'0'} backgroundColor="white" />
          </Styled.PasswordInputContainer>
          <Styled.PasswordInputContainer>
            <FormInput type="password" value={'0'} backgroundColor="white" />
          </Styled.PasswordInputContainer>
        </Styled.PasswordContainer>
      </FormArea>
    )
  }
)

export default React.memo(CardPasswordInput)
