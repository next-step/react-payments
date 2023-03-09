import { ChangeEvent, useState, FocusEvent } from 'react'
import { MAX_EXPIRATION_DATE_LENGTH, MONTH, MAX_SINGLE_DIGIT } from '../constants/Card'
import { getThisYear } from '../utils/getThisYear'

const INIT_EXPIRATION_VALUE = {
  MM: '',
  YY: '',
}

export const useExpirationDate = () => {
  const [cardExpirationDate, setCardExpirationDate] = useState(INIT_EXPIRATION_VALUE)
  const { currentYearFirstDigit, currentYearToDigit } = getThisYear()

  const cardExpirationDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    if (isNaN(Number(value))) return
    if (name === 'MM' && Number(value) > MONTH) return
    if (name === 'YY' && value.length === 1 && Number(value) < currentYearFirstDigit) return
    if (name === 'YY' && value.length === 2 && Number(value) < currentYearToDigit) return
    if (value !== '0' && value.length > MAX_EXPIRATION_DATE_LENGTH) return

    setCardExpirationDate((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const fetchedTwoLettersDataHandler = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setCardExpirationDate((prev) => ({
      ...prev,
      [name]: Number(value) <= MAX_SINGLE_DIGIT ? `0${Number(value)}` : value,
    }))
  }

  const validation = Object.values(cardExpirationDate).map((data) => data.length === MAX_EXPIRATION_DATE_LENGTH)

  return { cardExpirationDate, cardExpirationDateHandler, fetchedTwoLettersDataHandler, validation }
}
