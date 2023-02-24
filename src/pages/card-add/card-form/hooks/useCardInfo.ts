import { useState, ChangeEvent } from 'react'

import { isNumber } from '@/utils'

const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    name: '',
    expiredYear: '',
    expiredMonth: '',
    owner: '',
    securityCode: '',
    password: { first: '', second: '' },
  })

  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (!isNumber(value)) return
    switch (name) {
      case 'first':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, first: value },
        }))
        break
      case 'second':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, second: value },
        }))
        break
      case 'third':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, third: value },
        }))
        break
      case 'fourth':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, fourth: value },
        }))
        break
    }
  }

  const handleExpiredDate = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (!isNumber(value)) return
    switch (name) {
      case 'YY':
        if (value.length > 2) return
        setCardInfo((prev) => ({ ...prev, expiredYear: value }))
        break
      case 'MM':
        if (value.length > 2) return
        if (Number(value) > 12 || Number(value) < 0) {
          alert('월은 1이상 12이하여야 합니다.')
          return
        }
        setCardInfo((prev) => ({ ...prev, expiredMonth: value }))
        break
    }
  }

  const handleOwner = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 30) {
      alert('카드 소유자 이름은 30자리까지 입력할 수 있습니다.')
      return
    }
    setCardInfo((prev) => ({ ...prev, owner: event.target.value }))
  }

  const handleSecurityCode = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(event.target.value)) return
    if (event.target.value.length > 3) {
      alert('보안코드는 세자리수 입니다.')
      return
    }
    setCardInfo((prev) => ({ ...prev, securityCode: event.target.value }))
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (value.length > 1) return
    switch (name) {
      case 'first':
        setCardInfo((prev) => ({
          ...prev,
          password: { ...prev.password, first: value },
        }))
        break
      case 'second':
        setCardInfo((prev) => ({
          ...prev,
          password: { ...prev.password, second: value },
        }))
    }
  }
  return {
    cardInfo,
    handleNumber,
    handleExpiredDate,
    handleOwner,
    handleSecurityCode,
    handlePassword,
  }
}

export default useCardInfo
