import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { FormInputProps } from '..'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
  InputDividerText,
} from '../../../../components/Form/FormInput'
import { CardFormProps } from '../../../../context/Form/CardFormContext'
import { useCardFormDispatch } from '../../../../context/Form/hooks'
import { CREATE_EXPIRE_MONTH } from '../constants/id'

const CardNumberInput = forwardRef<
  Pick<CardFormProps, 'cardNumber'>,
  FormInputProps
>((props, ref) => {
  const inputRef1 = useRef<FormInputElementRef | null>(null)
  const inputRef2 = useRef<FormInputElementRef | null>(null)
  const inputRef3 = useRef<FormInputElementRef | null>(null)
  const inputRef4 = useRef<FormInputElementRef | null>(null)
  const dispatch = useCardFormDispatch()

  useImperativeHandle(ref, () => ({
    cardNumber() {
      return {
        cardNumber1: inputRef1.current?.value() ?? '',
        cardNumber2: inputRef2.current?.value() ?? '',
        cardNumber3: inputRef3.current?.value() ?? '',
        cardNumber4: inputRef4.current?.value() ?? '',
      }
    },
  }))

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'RERENDER' })

    if (event.currentTarget.value.length !== 4) {
      return
    }

    const nextElement = event.currentTarget.nextElementSibling
      ?.nextElementSibling as HTMLInputElement

    if (!nextElement) {
      document.getElementById(CREATE_EXPIRE_MONTH)?.focus()

      return
    }

    nextElement.focus()
  }

  return (
    <FormArea label="카드번호" errorMessage={props.errorMessage}>
      <FormInputBox>
        <FormInput
          type="number"
          ref={inputRef1}
          maxLength={4}
          onChange={onChange}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          type="number"
          ref={inputRef2}
          maxLength={4}
          onChange={onChange}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          type="password"
          ref={inputRef3}
          maxLength={4}
          onChange={onChange}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          type="password"
          ref={inputRef4}
          maxLength={4}
          onChange={onChange}
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardNumberInput)
