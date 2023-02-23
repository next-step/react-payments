import { ChangeEvent, useState, FocusEvent } from 'react'
import { EXPIRATION_DATE_LENGTH_MAX, INIT_EXPIRATION_VALUE, MONTH_MAX, SINGLE_DIGIT_MAX } from '../constants/Card'
import { getThisYear } from '../utils/getThisYear'

export const useExpirationDate = () => {
  const [cardExpirationDate, setCardExpirationDate] = useState(INIT_EXPIRATION_VALUE)

  const { currentYearFirstDigit, currentYearToDigit } = getThisYear()

  const cardExpirationDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    if (isNaN(Number(value))) return
    if (name === 'MM' && Number(value) > MONTH_MAX) return
    if (name === 'YY' && value.length === 1 && Number(value) < currentYearFirstDigit) return
    if (name === 'YY' && value.length === 2 && Number(value) < currentYearToDigit) return
    if (value !== '0' && value.length < EXPIRATION_DATE_LENGTH_MAX) {
      setCardExpirationDate((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const fetchedTwoLettersDataHanlder = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setCardExpirationDate((prev) => ({
      ...prev,
      [name]: Number(value) <= SINGLE_DIGIT_MAX ? `0${Number(value)}` : value,
    }))
  }

  return { cardExpirationDate, cardExpirationDateHandler, fetchedTwoLettersDataHanlder }
}
