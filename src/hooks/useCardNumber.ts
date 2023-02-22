import { ChangeEvent, useState } from 'react'
import { INIT_NUMBER_VALUE } from '../constants/Card'

export const useCardNumberData = (valueLengthMax: number) => {
  const [cardNumberData, setCardNumberData] = useState(INIT_NUMBER_VALUE)
  const cardNumberDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget
    if (isNaN(Number(value))) return
    if (value.length < valueLengthMax) {
      setCardNumberData((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }
  return { cardNumberData, cardNumberDataHandler, setCardNumberData }
}
