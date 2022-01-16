import {
  forwardRef,
  KeyboardEvent,
  KeyboardEventHandler,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import FormArea from '../../../../components/Form/FormArea'
import FormInput, {
  FormInputBox,
  FormInputElementRef,
  InputDividerText,
} from '../../../../components/Form/FormInput'

type CardNumberHandle = {
  cardNumber: () => string
}

const CardNumberInput = forwardRef<CardNumberHandle, {}>((props, ref) => {
  const inputRef1 = useRef<FormInputElementRef | null>(null)
  const inputRef2 = useRef<FormInputElementRef | null>(null)
  const inputRef3 = useRef<FormInputElementRef | null>(null)
  const inputRef4 = useRef<FormInputElementRef | null>(null)

  useImperativeHandle(ref, () => ({
    cardNumber() {
      const value1 = inputRef1.current?.value() ?? ''
      const value2 = inputRef2.current?.value() ?? ''
      const value3 = inputRef3.current?.value() ?? ''
      const value4 = inputRef4.current?.value() ?? ''

      return `${value1}/${value2}/${value3}/${value4}`
    },
  }))

  return (
    <FormArea label="카드번호" errorMessage="dd">
      <FormInputBox>
        <FormInput type="number" ref={inputRef1} maxLength={4} />
        <InputDividerText>-</InputDividerText>
        <FormInput type="number" ref={inputRef2} maxLength={4} />
        <InputDividerText>-</InputDividerText>
        <FormInput type="number" ref={inputRef3} maxLength={4} />
        <InputDividerText>-</InputDividerText>
        <FormInput type="number" ref={inputRef4} maxLength={4} />
      </FormInputBox>
    </FormArea>
  )
})

export default CardNumberInput
