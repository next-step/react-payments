import { useRef } from 'react'

export const useInputFocus = (numberData: NumberData) => {
  const { num1, num2, num3 } = numberData
  const num1Ref = useRef<HTMLInputElement>(null)
  const num2Ref = useRef<HTMLInputElement>(null)
  const num3Ref = useRef<HTMLInputElement>(null)
  const num4Ref = useRef<HTMLInputElement>(null)

  if (num1.length === 4) {
    num2Ref?.current?.focus()
  }
  if (num2.length === 4) {
    num3Ref?.current?.focus()
  }
  if (num3.length === 4) {
    num4Ref?.current?.focus()
  }
  return { num1Ref, num2Ref, num3Ref, num4Ref }
}
