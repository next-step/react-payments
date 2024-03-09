import { useContext, useEffect } from 'react'
import useMasking from '../../hooks/useMasking'
import { UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'

export const CardNumber = () => {
  const [, masking, checkPartMasking] = useMasking({
    totalText: 19,
    number: 4,
    divider: 2,
  })
  const updateCardInfo = useContext(UpdateCardInfoContext)

  useEffect(() => {
    if (masking) {
      updateCardInfo({ cardNumber: masking.join(' ') })
    }
  }, [masking])
  return (
    <Input
      value={masking.join('-')} //
      onChange={(e) => checkPartMasking(e.target.value)}
      type="text"
      placeholder="카드번호"
      maxLength={19}
      label="카드번호"
    />
  )
}
