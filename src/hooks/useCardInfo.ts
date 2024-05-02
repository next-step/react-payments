import { CardInfoContext, UpdateCardInfoContext } from '@/context/paymentContext'
import { useContext, useState } from 'react'

const useCardInfo = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const [privateKeypad, setPrivateKeypad] = useState<{ key: string; isOpen: boolean }>({
    key: '',
    isOpen: false,
  }) // 키패드 컴포넌트

  return {
    cardInfo,
    updateCardInfo,
    privateKeypad,
    setPrivateKeypad,
  }
}

export default useCardInfo
