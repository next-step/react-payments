import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { CardFormProps } from '..'
import Styled from './index.style'
import CardNumberInput from './Number'
import CardExpireInput from './Expire'
import CardCvcInput from './Cvc'
import CardPasswordInput from './Password'
import CardNameInput from './Name'

const CreateCardForm = forwardRef<CardFormProps, {}>((_, ref) => {
  const cardNumberRef = useRef<React.ElementRef<typeof CardNumberInput>>(null)
  const cardExpireRef = useRef<React.ElementRef<typeof CardExpireInput>>(null)
  const cardCvcRef = useRef<React.ElementRef<typeof CardCvcInput>>(null)
  const cardPasswordRef =
    useRef<React.ElementRef<typeof CardPasswordInput>>(null)
  const cardNameInput = useRef<React.ElementRef<typeof CardNameInput>>(null)

  useImperativeHandle(ref, () => ({
    cardNumber1() {
      return cardNumberRef.current?.cardNumber1() ?? ''
    },
    cardNumber2() {
      return cardNumberRef.current?.cardNumber2() ?? ''
    },
    cardNumber3() {
      return cardNumberRef.current?.cardNumber3() ?? ''
    },
    cardNumber4() {
      return cardNumberRef.current?.cardNumber4() ?? ''
    },
    cvc() {
      return cardCvcRef.current?.cvc() ?? ''
    },
    expiredAtMonth() {
      return cardExpireRef.current?.expireAtMonth() ?? ''
    },
    expiredAtYear() {
      return cardExpireRef.current?.expireAtYear() ?? ''
    },
    password1() {
      return cardPasswordRef.current?.password1() ?? ''
    },
    password2() {
      return cardPasswordRef.current?.password2() ?? ''
    },
    name() {
      return ''
    },
  }))

  return (
    <div>
      <CardNumberInput ref={cardNumberRef} />
      <Styled.ExpireWrapper>
        <CardExpireInput ref={cardExpireRef} />
      </Styled.ExpireWrapper>
      <CardNameInput ref={cardNameInput} />
      <Styled.CvcWrapper>
        <CardCvcInput ref={cardCvcRef} />
      </Styled.CvcWrapper>
      <CardPasswordInput ref={cardPasswordRef} />
    </div>
  )
})

export default CreateCardForm
