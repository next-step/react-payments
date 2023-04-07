import { ChangeEvent } from 'react'

import { CardPasswordProps } from '@/pages/CardAdd/components/CardForm/types'
import { useSequentialInputFocus } from '@/pages/hooks'

const useCardPassword = ({ passwordRef, handleChange }: CardPasswordProps) => {
  useSequentialInputFocus([
    { ref: passwordRef.first, maxLength: 1 },
    { ref: passwordRef.second, maxLength: 1 },
  ])

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
      default:
        throw new Error('useCardPassword: Invalid name')
    }
  }
  return { handleInputChange }
}

export default useCardPassword
