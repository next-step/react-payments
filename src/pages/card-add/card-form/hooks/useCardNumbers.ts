import { ChangeEvent, useRef } from 'react'

import { CardNumbersProps } from '@/pages/card-add/card-form/types'
import { useSequentialInputFocus } from '@/pages/hooks'

const useCardNumbers = ({ numbers, handleChange }: CardNumbersProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstRef, isFocus: numbers.first.length === 4 },
    { ref: secondRef, isFocus: numbers.second.length === 4 },
    { ref: thirdRef, isFocus: numbers.third.length === 4 },
    { ref: fourthRef, isFocus: numbers.fourth.length === 4 },
  ])

  const { first: firstValue, second: secondValue, third: thirdValue, fourth: fourthValue } = numbers

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'first':
        handleChange({ value, order: name })
        break
      case 'second':
        handleChange({ value, order: name })
        break
      case 'third':
        handleChange({ value, order: name })
        break
      case 'fourth':
        handleChange({ value, order: name })
        break
      // Default에서 에러 던지기
    }
  }

  return {
    firstValue,
    secondValue,
    thirdValue,
    fourthValue,
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    handleInputChange,
  }
}

export default useCardNumbers
