import { ChangeEvent } from 'react'

import { isYearValid } from '@/domain'
import { UseCardExpiredDateProps } from '@/pages/CardAdd/components/CardForm/types'

const useCardExpiredDate = ({ handleChange }: UseCardExpiredDateProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'YY':
        if (value.length === 2 && !isYearValid(Number(value))) {
          alert('유효기간이 만료되었습니다.')
          event.target.value = ''
          return
        }
        handleChange({ value, yymm: name })
        break
      case 'MM':
        if (Number(value) > 12 || Number(value) < 0) {
          alert('월은 1이상 12이하여야 합니다.')
          event.target.value = ''
          return
        }
        handleChange({ value, yymm: name })
        break
    }
  }

  return { handleInputChange }
}

export default useCardExpiredDate
