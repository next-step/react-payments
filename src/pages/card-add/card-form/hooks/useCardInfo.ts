import { useState, ChangeEvent } from 'react'

import { isNumber } from '@/utils'

const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    name: '',
    expiratedYear: '',
    expiratedMonth: '',
    owner: '',
    securityCode: '',
    password: '',
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
        setCardInfo((prev) => ({ ...prev, expiratedYear: value }))
        break
      case 'MM':
        //Todo: 월은 1 이상 12 엣지케이스 고려
        setCardInfo((prev) => ({ ...prev, expiratedMonth: value }))
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
    setCardInfo((prev) => ({ ...prev, password: event.target.value }))
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
