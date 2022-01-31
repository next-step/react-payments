import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { FormInputProps } from '..'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputElementRef,
} from '../../../../components/Form/FormInput'
import { CardFormProps } from '../../../../context/Form/CardFormContext'
import { useCardFormDispatch } from '../../../../context/Form/hooks'
import { CREATE_CARD_PASSWORD1, CREATE_CARD_PASSWORD2 } from '../constants/id'
import Styled from './index.style'

const CardPasswordInput = forwardRef<
  Pick<CardFormProps, 'password'>,
  FormInputProps
>((props, ref) => {
  const inputPassword1 = useRef<FormInputElementRef | null>(null)
  const inputPassword2 = useRef<FormInputElementRef | null>(null)
  const dispatch = useCardFormDispatch()

  useImperativeHandle(ref, () => ({
    password() {
      return {
        password1: inputPassword1.current?.value() ?? '',
        password2: inputPassword2.current?.value() ?? '',
      }
    },
  }))

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'RERENDER' })
    if (event.currentTarget.id !== CREATE_CARD_PASSWORD1) {
      return
    }
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
            ref={inputPassword2}
            maxLength={1}
            onChange={onChange}
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
})

export default React.memo(CardPasswordInput)
