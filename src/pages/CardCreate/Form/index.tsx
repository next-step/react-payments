import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { CardErrorStateProps, CardFormProps } from '..'
import Styled from './index.style'
import CardNumberInput from './Number'
import CardExpireInput from './Expire'
import CardCvcInput from './Cvc'
import CardPasswordInput from './Password'
import CardOnwerInput from './Owner'
import {
  CARD_CVC_ERROR,
  CARD_EXPIRE_ERROR,
  CARD_NUMBER_ERROR,
  CARD_PASSWORD_ERROR,
} from '../../../constants/error/formErrorMessage'

export interface FormInputProps {
  errorMessage?: string
}

const CreateCardForm = forwardRef<
  CardFormProps,
  { error: CardErrorStateProps }
>(({ error }, ref) => {
  const cardNumberRef = useRef<React.ElementRef<typeof CardNumberInput>>(null)
  const cardExpireRef = useRef<React.ElementRef<typeof CardExpireInput>>(null)
  const cardCvcRef = useRef<React.ElementRef<typeof CardCvcInput>>(null)
  const cardPasswordRef =
    useRef<React.ElementRef<typeof CardPasswordInput>>(null)
  const CardOnwerInputRef =
    useRef<React.ElementRef<typeof CardOnwerInput>>(null)

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
    owner() {
      return CardOnwerInputRef.current?.owner() ?? ''
    },
  }))

  return (
    <div>
      <CardNumberInput
        ref={cardNumberRef}
        {...(error.isCardNumberError && { errorMessage: CARD_NUMBER_ERROR })}
      />
      <Styled.ExpireWrapper>
        <CardExpireInput
          ref={cardExpireRef}
          {...(error.isCardExpireDateError && {
            errorMessage: CARD_EXPIRE_ERROR,
          })}
        />
      </Styled.ExpireWrapper>
      <CardOnwerInput ref={CardOnwerInputRef} />
      <Styled.CvcWrapper>
        <CardCvcInput
          ref={cardCvcRef}
          {...(error.isCardCvcError && { errorMessage: CARD_CVC_ERROR })}
        />
      </Styled.CvcWrapper>
      <CardPasswordInput
        ref={cardPasswordRef}
        {...(error.isCardPasswordError && {
          errorMessage: CARD_PASSWORD_ERROR,
        })}
      />
    </div>
  )
})

export default CreateCardForm
