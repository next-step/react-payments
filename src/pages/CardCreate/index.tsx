import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardType } from '../../components/Form'
import Header from '../../components/Layout/Header'
import { useCardDispatch } from '../../context/Card/hooks'
import CardFormContextProvider from '../../context/Form/CardFormContext'
import FormContextProvider from '../../context/Form/FormChangeContext'
import { uuidv4 } from '../../utils/crypto'
import CreateCard from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'
import CardCreateModal from './Modal'

const CardCreate = () => {
  const formRef = useRef<React.ElementRef<typeof CreateCardForm>>(null)

  const cardDispatch = useCardDispatch()
  const navigate = useNavigate()

  const [isModalOpen, setModalIsOpen] = useState(false)
  const [cardType, setCardType] = useState<CardType>()
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
  }, [])

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
  }, [])

  const isCvcIsValid = useCallback(() => {
    return formRef.current?.cvc().length === 3
  }, [])

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
  }, [])

  const getLocalCardProps = useCallback(() => {
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } =
      formRef.current?.cardNumber() ?? {
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
      }

    const year = formRef.current?.cardExpire().expireAtYear as string
    const month = formRef.current?.cardExpire().expireAtMonth as string

    const owner = formRef.current?.owner() as string

    return {
      number1: cardNumber1,
      number2: cardNumber2,
      number3: cardNumber3,
      number4: cardNumber4,
      year,
      month,
      owner,
      type: cardType,
    }
  }, [cardType])

  const onSubmit = () => {
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

    if (
      cardNumberValid &&
      cardExpireDateValid &&
      cardCvcValid &&
      cardPasswordValid
    ) {
      const id = crypto.randomUUID ? crypto.randomUUID() : uuidv4()

      cardDispatch({
        type: 'ADD',
        payload: { id, card: getLocalCardProps() },
      })

      navigate('/submit')
    }
  }

  return (
    <>
      <FormContextProvider>
        <CardFormContextProvider formRef={formRef}>
          <Header title="카드추가" linkTo="/" />
          <Styled.CardCreateContainer>
            <CreateCard
              cardType={cardType}
              setCardType={setCardType}
              setModalIsOpen={setModalIsOpen}
            />
            <CreateCardForm ref={formRef} error={error} />
            <Styled.ButtonContaienr>
              <Styled.CreateCardButton onClick={onSubmit}>
                다음
              </Styled.CreateCardButton>
            </Styled.ButtonContaienr>
            <CardCreateModal
              isOpen={isModalOpen}
              setIsOpen={setModalIsOpen}
              setCardType={setCardType}
            />
          </Styled.CardCreateContainer>
        </CardFormContextProvider>
      </FormContextProvider>
    </>
  )
}

export default CardCreate

export interface CardErrorStateProps {
  isCardNumberError: boolean | undefined
  isCardExpireDateError: boolean | undefined
  isCardCvcError: boolean | undefined
  isCardPasswordError: boolean | undefined
}
