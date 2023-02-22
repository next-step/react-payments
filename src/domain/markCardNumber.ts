import { CARD_NUMBER_LENGTH_MAX } from '../constants/Card'
import { changeSerectNumber } from './changeSecretNumber'

export const markCardNumber = (numberData: NumberData) => {
  const { num1, num2, num3, num4 } = numberData

  const number1 = num1.length === CARD_NUMBER_LENGTH_MAX ? `${num1}-` : num1
  const number2 = num2.length === CARD_NUMBER_LENGTH_MAX ? `${num2}-` : num2
  const number3 = num3.length === CARD_NUMBER_LENGTH_MAX ? `${changeSerectNumber(num3)}-` : changeSerectNumber(num3)

  return number1 + number2 + number3 + changeSerectNumber(num4)
}
