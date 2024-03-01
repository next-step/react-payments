import { useContext, useEffect } from 'react'
import useMasking from '../../hooks/useMasking'
import { UpdateCardInfoContext } from '../../context/paymentContext'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export type TInputProps = {
  number?: number //-로 묶일 자리수
  divider: number //마스킹할 자리수
  placeholder?: string
  totalText: number //총 자리수
  isMasking?: boolean
  maxLength?: number
}
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
    <div className={ui['input-container']}>
      <span className={ui['input-title']}>카드번호</span>
      <div className={ui['input-box']}>
        {/* <MaskingPartInput totalText={19} number={4} divider={2} isMasking={true} placeholder="카드번호" maxLength={19} /> */}
        <Input
          value={masking.join('-')} //
          onChange={(e) => checkPartMasking(e.target.value)}
          type="text"
          placeholder="카드번호"
          maxLength={19}
        />
      </div>
    </div>
  )
}
