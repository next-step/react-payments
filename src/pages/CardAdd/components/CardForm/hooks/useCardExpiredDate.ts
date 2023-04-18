import { ChangeEvent } from 'react'

import { isYearValid } from '@/domain'
import { useCardInfo } from '@/pages/hooks'

const useCardExpiredDate = () => {
  const { handleExpiredDate } = useCardInfo()
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
        handleExpiredDate({ value, yymm: name })
        break
      case 'MM':
        if (Number(value) > 12 || Number(value) < 0) {
          alert('월은 1이상 12이하여야 합니다.')
          event.target.value = ''
          return
        }
        handleExpiredDate({ value, yymm: name })
        break
    }
  }

  return { handleInputChange }
}

export default useCardExpiredDate
