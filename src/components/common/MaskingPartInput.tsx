import ui from '../../styles/index.module.css'
import useMasking from '../../hooks/useMasking'
import { useContext, useEffect } from 'react'
import { UpdateCardInfoContext } from '../../context/paymentContext'

export type TInputProps = {
  number?: number //-로 묶일 자리수
  divider: number //마스킹할 자리수
  placeholder?: string
  totalText: number //총 자리수
  isMasking?: boolean
  maxLength?: number
}
const MaskingPartInput = (props: TInputProps) => {
  const [, masking, checkPartMasking] = useMasking({ ...props })
  const updateCardInfo = useContext(UpdateCardInfoContext)

  useEffect(() => {
    if (masking) {
      updateCardInfo({ cardNumber: masking.join(' ') })
    }
  }, [masking])
  return (
    <input
      className={ui['input-basic']}
      value={masking.join('-')} //
      onChange={(e) => checkPartMasking(e.target.value)}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  )
}

export default MaskingPartInput
