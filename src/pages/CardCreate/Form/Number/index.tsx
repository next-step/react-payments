import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
  InputDividerText,
} from '../../../../components/Form/FormInput'
import { useFormChangedDispatch } from '../../../../context/Form/hooks'
import { CREATE_EXPIRE_MONTH } from '../constants/id'

type CardNumberHandle = {
  cardNumber1: () => string
  cardNumber2: () => string
  cardNumber3: () => string
  cardNumber4: () => string
}

const CardNumberInput = forwardRef<CardNumberHandle, {}>((props, ref) => {
  const inputRef1 = useRef<FormInputElementRef | null>(null)
  const inputRef2 = useRef<FormInputElementRef | null>(null)
  const inputRef3 = useRef<FormInputElementRef | null>(null)
  const inputRef4 = useRef<FormInputElementRef | null>(null)
  const dispatch = useFormChangedDispatch()

  useImperativeHandle(ref, () => ({
    cardNumber1() {
      return inputRef1.current?.value() ?? ''
    },
    cardNumber2() {
      return inputRef2.current?.value() ?? ''
    },
    cardNumber3() {
      return inputRef3.current?.value() ?? ''
    },
    cardNumber4() {
      return inputRef4.current?.value() ?? ''
    },
  }))

  const onChange =
    (name: 'number1' | 'number2' | 'number3' | 'number4') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'CHANGE', payload: { name } })

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
    <FormArea label="카드번호">
      <FormInputBox>
        <FormInput
          ref={inputRef1}
          maxLength={4}
          onChange={onChange('number1')}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          ref={inputRef2}
          maxLength={4}
          onChange={onChange('number2')}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          type="password"
          ref={inputRef3}
          maxLength={4}
          onChange={onChange('number3')}
        />
        <InputDividerText color="green">-</InputDividerText>
        <FormInput
          type="password"
          ref={inputRef4}
          maxLength={4}
          onChange={onChange('number4')}
        />
      </FormInputBox>
    </FormArea>
  )
})

export default React.memo(CardNumberInput)
