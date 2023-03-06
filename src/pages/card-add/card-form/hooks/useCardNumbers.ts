import { ChangeEvent } from 'react'

import { CardNumbersProps } from '@/pages/card-add/card-form/types'

const useCardNumbers = ({ handleChange }: CardNumbersProps) => {
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
    // firstValue,
    // secondValue,
    // thirdValue,
    // fourthValue,
    // firstRef,
    // secondRef,
    // thirdRef,
    // fourthRef,
    handleInputChange,
  }
}

export default useCardNumbers
