import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { CardErrorStateProps } from '..'
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
import { CardFormProps } from '../../../context/Form/CardFormContext'

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

  useImperativeHandle(ref, () => {
    return {
      cardNumber: () => {
        const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } =
          cardNumberRef.current?.cardNumber() ?? {
            cardNumber1: '',
            cardNumber2: '',
            cardNumber3: '',
            cardNumber4: '',
          }

        return {
          cardNumber1,
          cardNumber2,
          cardNumber3,
          cardNumber4,
        }
      },
      cvc() {
        return cardCvcRef.current?.cvc() ?? ''
      },
      cardExpire: () => {
        const { expireAtMonth, expireAtYear } =
          cardExpireRef.current?.cardExpire() ?? {
            expireAtMonth: '',
            expireAtYear: '',
          }

        return {
          expireAtMonth,
          expireAtYear,
        }
      },

      password: () => {
        const { password1, password2 } =
          cardPasswordRef.current?.password() ?? {
            password1: '',
            password2: '',
          }

        return {
          password1,
          password2,
        }
      },
      owner() {
        return CardOnwerInputRef.current?.owner() ?? ''
      },
    }
  })

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

export interface FormInputProps {
  errorMessage?: string
}
