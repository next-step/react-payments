import { useRef, ChangeEvent } from 'react'

import { CardExpiredDateProps } from '@/pages/card-add/card-form/types'
import { useSequentialInputFocus } from '@/pages/hooks'

const useCardExpiredDate = ({ expiredYear, expiredMonth, handleChange }: CardExpiredDateProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstRef, isFocus: expiredMonth.length === 2 },
    { ref: secondRef, isFocus: expiredYear.length === 2 },
  ])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'YY':
        handleChange({ value, yymm: name })
        break
      case 'MM':
        handleChange({ value, yymm: name })
        break
    }
  }

  return { firstRef, secondRef, handleInputChange }
}

export default useCardExpiredDate
