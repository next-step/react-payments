import { ChangeEvent, useState, FocusEvent } from 'react'
import { EXPIRATION_DATE_LENGTH_MAX, INIT_EXPIRATION_VALUE, MONTH_MAX, SINGLE_DIGIT_MAX } from '../constants/Card'

export const useExpirationDate = () => {
  const [cardExpirationDate, setCardExpirationDate] = useState(INIT_EXPIRATION_VALUE)
  const cardExpirationDateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget
    if (isNaN(Number(value))) return
    if (id === 'MM' && Number(value) > MONTH_MAX) return
    if (value !== '0' && value.length < EXPIRATION_DATE_LENGTH_MAX) {
      setCardExpirationDate((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }
  const fetchedTwoLettersDataHanlder = (e: FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget
    setCardExpirationDate((prev) => ({
      ...prev,
      [id]: Number(value) <= SINGLE_DIGIT_MAX ? `0${Number(value)}` : value,
    }))
  }
  return { cardExpirationDate, cardExpirationDateHandler, fetchedTwoLettersDataHanlder }
}
