import { useContext } from 'react'

import { CardDispatchContext } from '@/contexts/card'
import { CardInfomation } from '@/domain'
import { isNumber } from '@/utils'

interface HandleNumberProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}

interface HandleExpiredDateProps {
  value: string
  yymm: 'YY' | 'MM'
}

interface HandleOwnerProps {
  value: string
}

const useCardInfo = () => {
  const cardDispatch = useContext(CardDispatchContext)

  const handleNumber = ({ value, order }: HandleNumberProps) => {
    if (!isNumber(value)) return

    cardDispatch({
      type: 'SET_CARD_NUMBERS',
      payload: {
        [order]: value,
      },
    })
  }

  const handleExpiredDate = ({ value, yymm }: HandleExpiredDateProps) => {
    if (!isNumber(value)) return
    switch (yymm) {
      case 'YY':
        cardDispatch({
          type: 'SET_EXPIRED_YEAR',
          payload: value,
        })
        break
      case 'MM':
        cardDispatch({
          type: 'SET_EXPIRED_MONTH',
          payload: value,
        })
        break
    }
  }

  const handleOwner = ({ value }: HandleOwnerProps) => {
    if (value.length > 30) {
      alert('카드 소유자 이름은 30자리까지 입력할 수 있습니다.')
      return
    }
    cardDispatch({ type: 'SET_OWNER', payload: value })
  }

  const handleSecurityCode = ({ value }: { value: string }) => {
    cardDispatch({
      type: 'SET_SECURITY_CODE',
      payload: value,
    })
  }

  const handleNickname = (value: string) => {
    cardDispatch({ type: 'SET_NICKNAME', payload: value })
  }

  interface HandlePasswordProps {
    value: string
    order: 'first' | 'second'
  }

  const handlePassword = ({ value, order }: HandlePasswordProps) => {
    if (!isNumber(value)) return
    cardDispatch({
      type: 'SET_PASSWORD',
      payload: {
        [order]: value,
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
