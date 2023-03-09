import { useEffect, useRef } from 'react'
import { MAX_CARD_NUMBER_LENGTH } from '../constants/Card'

export const useInputFocus = (numberData: NumberData) => {
  const { num1, num2, num3 } = numberData

  const num1Ref = useRef<HTMLInputElement>(null)
  const num2Ref = useRef<HTMLInputElement>(null)
  const num3Ref = useRef<HTMLInputElement>(null)
  const num4Ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    num1.length === MAX_CARD_NUMBER_LENGTH && num2Ref.current?.focus()
  }, [num1])

  useEffect(() => {
    num2.length === MAX_CARD_NUMBER_LENGTH && num3Ref.current?.focus()
  }, [num2])

  useEffect(() => {
    num3.length === MAX_CARD_NUMBER_LENGTH && num4Ref.current?.focus()
  }, [num3])

  return { num1Ref, num2Ref, num3Ref, num4Ref }
}
