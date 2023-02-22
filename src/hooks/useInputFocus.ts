import { useRef } from 'react'
import { CARD_NUMBER_LENGTH_MAX } from '../constants/Card'

export const useInputFocus = (numberData: NumberData) => {
  const { num1, num2, num3, num4 } = numberData
  const num1Ref = useRef<HTMLInputElement>(null)
  const num2Ref = useRef<HTMLInputElement>(null)
  const num3Ref = useRef<HTMLInputElement>(null)
  const num4Ref = useRef<HTMLInputElement>(null)

  if (num1.length === CARD_NUMBER_LENGTH_MAX) {
    num2Ref?.current?.focus()
  }
  if (num2.length === CARD_NUMBER_LENGTH_MAX) {
    num3Ref?.current?.focus()
  }
  if (num3.length === CARD_NUMBER_LENGTH_MAX) {
    num4Ref?.current?.focus()
  }
  if (num4.length === CARD_NUMBER_LENGTH_MAX) {
    num4Ref?.current?.focus()
  }
  return { num1Ref, num2Ref, num3Ref, num4Ref }
}
