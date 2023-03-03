import { ChangeEvent, useContext } from 'react'

import { CardStateContext, CardDispatchContext } from '@/contexts/card'
import { CardInfomation } from '@/domain'
import { isNumber } from '@/utils'

const useCardInfo = () => {
  const cardInfo = useContext(CardStateContext)
  const cardDispatch = useContext(CardDispatchContext)

  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (!isNumber(value)) return
    switch (name) {
      case 'first':
        if (value.length > 4) return
        cardDispatch({
          type: 'SET_CARD_NUMBERS',
          payload: {
            ...cardInfo.cardNumbers,
            first: value,
          },
        })
        break
      case 'second':
        if (value.length > 4) return
        cardDispatch({
          type: 'SET_CARD_NUMBERS',
          payload: {
            ...cardInfo.cardNumbers,
            second: value,
          },
        })
        break
      case 'third':
        if (value.length > 4) return
        cardDispatch({
          type: 'SET_CARD_NUMBERS',
          payload: {
            ...cardInfo.cardNumbers,
            third: value,
          },
        })
        break
      case 'fourth':
        if (value.length > 4) return
        cardDispatch({
          type: 'SET_CARD_NUMBERS',
          payload: {
            ...cardInfo.cardNumbers,
            fourth: value,
          },
        })
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
        cardDispatch({
          type: 'SET_EXPIRED_YEAR',
          payload: value,
        })
        break
      case 'MM':
        if (value.length > 2) return
        if (Number(value) > 12 || Number(value) < 0) {
          alert('월은 1이상 12이하여야 합니다.')
          return
        }
        cardDispatch({
          type: 'SET_EXPIRED_MONTH',
          payload: value,
        })
        break
    }
  }

  const handleOwner = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 30) {
      alert('카드 소유자 이름은 30자리까지 입력할 수 있습니다.')
      return
    }
    cardDispatch({ type: 'SET_OWNER', payload: event.target.value })
  }

  const handleSecurityCode = (value: string) => {
    cardDispatch({
      type: 'SET_SECURITY_CODE',
      payload: value,
    })
  }

  const handleNickname = (value: string) => {
    cardDispatch({ type: 'SET_NICKNAME', payload: value })
  }

  interface HandlePasswordProps {
    first: string
    second: string
  }

  const handlePassword = ({ first, second }: HandlePasswordProps) => {
    cardDispatch({
      type: 'SET_PASSWORD',
      payload: {
        first,
        second,
      },
    })
  }

  const setAllCardInfo = (card: CardInfomation) => {
    cardDispatch({ type: 'SET_ALL', payload: card })
  }

  const resetCardInfo = () => {
    cardDispatch({ type: 'RESET_ALL' })
  }

  return {
    cardInfo,
    handleNumber,
    handleExpiredDate,
    handleOwner,
    handleNickname,
    handleSecurityCode,
    handlePassword,
    setAllCardInfo,
    resetCardInfo,
  }
}

export default useCardInfo
