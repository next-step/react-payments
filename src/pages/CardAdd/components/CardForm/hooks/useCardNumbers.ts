import { ChangeEvent } from 'react'

import { CardNumbersProps } from '@/pages/CardAdd/components/CardForm/types'

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
      default:
        throw new Error('useCardNumbers: Invalid name')
    }
  }

  return {
    handleInputChange,
  }
}

export default useCardNumbers
