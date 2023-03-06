import { Input } from 'components/atoms/Input'
import { REGEX } from 'constants/regex'
import { UI_VARIANT } from 'constants/ui.constant'
import { CardNumbersType, CardNumbersValidate } from 'models/card.model'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FormGroup } from '../FormGroup'

const CardNumberField: React.FC = () => {
  //   const [validate, setValidate] = useState<CardNumbersValidate>({
  //     firstNumber: false,
  //     secondNumber: false,
  //     thridNumber: false,
  //     fourthNumber: false,
  //   })
  //   const [cardNumbers, setCardNumbers] = useState<CardNumbersType>({
  //     firstNumber: '',
  //     secondNumber: '',
  //     thridNumber: '',
  //     fourthNumber: '',
  //   })
  //   const cardNumberEl = useRef(null)

  //   useEffect(() => {
  //     console.log(validate)
  //   }, [validate])

  //   const updateChange = (e: ChangeEvent) => {
  //     const { value, name } = e.target as HTMLInputElement
  //     const convertValue = value.replace(REGEX.NOT_NUMBER, '')

  //     setCardNumbers((prev) => ({
  //       ...prev,
  //       [name]: convertValue,
  //     }))

  //     if (convertValue.length === 4) {
  //       setValidate((prev) => ({
  //         ...prev,
  //         [name]: true,
  //       }))
  //     }
  //   }

  return <div>CardNumberField</div>
}

export default CardNumberField

/***
 *   const onChangeCardNumber = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_NUMBER, '')

    setCard((prev) => ({
      ...prev,
      [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
        ...prev.cardNumbers,
        [name]: convertValue,
      },
    }))

    if (convertValue.length === 4) {
      setValidate((prev) => ({
        ...prev,
        [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
          ...prev.cardNumbers,
          [name]: true,
        },
      }))
    }

    const onUpdateCardItem = (card: AddPaymentCard) => {
      setCard((prev) => ({
        ...prev,
        ...card,
      }))
    }

    // console.log(e.target, e.currentTarget, e.currentTarget.validity as any)
    // setCard((prev) => ({
    //   ...prev,
    //   [name]: [value.replace(REGEX.NOT_NUMBER, '')],
    // }))
    // patternMismatch 가 false면 다음 포커싱
    // e.target === ref.current => next focus
    // pattern='[0-9]{3}'
  }

  
 * 
 * 
 */
