import { ChangeEvent, useState } from 'react'
import { CARD_NUMBER_LENGTH_MAX, INIT_NUMBER_VALUE } from '../constants/Card'

export const UseCardNumber = () => {
  const [cardNumber, setInputValue] = useState(INIT_NUMBER_VALUE)
  const cardNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget
    if (Number(value) && value.length < CARD_NUMBER_LENGTH_MAX) {
      setInputValue((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }
  return { cardNumber, cardNumberHandler }
}
