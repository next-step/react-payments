import { useCallback, useState } from 'react'
import { CardFormProps } from '../../context/Form/CardFormContext'

interface CardErrorStateProps {
  isCardNumberError: boolean | undefined
  isCardExpireDateError: boolean | undefined
  isCardCvcError: boolean | undefined
  isCardPasswordError: boolean | undefined
}

interface UseValidateCardFormProps {
  formRef: React.RefObject<CardFormProps>
}

const useValidateCardForm = ({ formRef }: UseValidateCardFormProps) => {
  const [error, setError] = useState<CardErrorStateProps>({
    isCardNumberError: undefined,
    isCardExpireDateError: undefined,
    isCardCvcError: undefined,
    isCardPasswordError: undefined,
  })

  const isCardNumberValid = useCallback(() => {
    const isValidNumber = (number: string | undefined) => number?.length === 4
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } =
      formRef.current?.cardNumber() ?? {
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
      }

    const cardNumber1Valid = isValidNumber(cardNumber1)
    const cardNumber2Valid = isValidNumber(cardNumber2)
    const cardNumber3Valid = isValidNumber(cardNumber3)
    const cardNumber4Valid = isValidNumber(cardNumber4)

    return (
      cardNumber1Valid &&
      cardNumber2Valid &&
      cardNumber3Valid &&
      cardNumber4Valid
    )
  }, [formRef])

  const isExpireDateValid = useCallback(() => {
    const isValidExpireDate = (date: string | undefined) => date?.length === 2
    const month = Number(formRef.current?.cardExpire().expireAtMonth)

    const isMonthScopeValid = 1 <= month && month <= 12

    const cardExpireMonthValid =
      isValidExpireDate(formRef.current?.cardExpire().expireAtMonth) &&
      isMonthScopeValid

    const cardExpireYearValid = isValidExpireDate(
      formRef.current?.cardExpire().expireAtYear
    )

    return cardExpireMonthValid && cardExpireYearValid
  }, [formRef])

  const isCvcIsValid = useCallback(() => {
    return formRef.current?.cvc().length === 3
  }, [formRef])

  const isPasswordValid = useCallback(() => {
    const isPasswordValid = (password: string | undefined) =>
      password?.length === 1
    const password1Valid = isPasswordValid(
      formRef.current?.password().password1
    )
    const password2Valid = isPasswordValid(
      formRef.current?.password().password2
    )

    return password1Valid && password2Valid
  }, [formRef])

  const validateCardForm = useCallback(() => {
    const cardNumberValid = isCardNumberValid()
    const cardExpireDateValid = isExpireDateValid()
    const cardCvcValid = isCvcIsValid()
    const cardPasswordValid = isPasswordValid()

    setError({
      isCardNumberError: !cardNumberValid,
      isCardExpireDateError: !cardExpireDateValid,
      isCardCvcError: !cardCvcValid,
      isCardPasswordError: !cardPasswordValid,
    })

    return (
      cardNumberValid &&
      cardExpireDateValid &&
      cardCvcValid &&
      cardPasswordValid
    )
  }, [isCardNumberValid, isCvcIsValid, isExpireDateValid, isPasswordValid])

  return { error, validateCardForm }
}

export { useValidateCardForm }
