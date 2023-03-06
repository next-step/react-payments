import { ChangeEvent } from 'react'

import { UseCardExpiredDateProps } from '@/pages/card-add/card-form/types'

const useCardExpiredDate = ({ handleChange }: UseCardExpiredDateProps) => {
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

  return { handleInputChange }
}

export default useCardExpiredDate
