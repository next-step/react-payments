import { changeSerectNumber } from '../domain/changeSecretNumber'

export const useMarkCardNumber = (numberData: NumberData) => {
  const { num1, num2, num3, num4 } = numberData

  const number1 = num1.length === 4 ? `${num1}-` : num1
  const number2 = num2.length === 4 ? `${num2}-` : num2
  const number3 = num3.length === 4 ? `${changeSerectNumber(num3)}-` : changeSerectNumber(num3)

  return number1 + number2 + number3 + changeSerectNumber(num4)
}
