import { ChangeEvent, useState } from 'react'

const INIT_NUMBER_VALUE = {
  num1: '',
  num2: '',
  num3: '',
  num4: '',
}

export const useCardNumberData = (valueLengthMax: number) => {
  const [cardNumberData, setCardNumberData] = useState(INIT_NUMBER_VALUE)

  const cardNumberDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    if (isNaN(Number(value))) return
    if (value.length > valueLengthMax) return
    setCardNumberData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validation = Object.values(cardNumberData).map((data) => data.length === valueLengthMax)

  return { cardNumberData, cardNumberDataHandler, setCardNumberData, validation }
}
