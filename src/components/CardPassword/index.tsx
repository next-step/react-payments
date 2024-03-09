import useMasking from '../../hooks/useMasking'
import { Input } from '../../stories/Input'

export const CardPassword = () => {
  const [, maskingValue, , checkAllMasking] = useMasking({ totalText: 2, number: 2, divider: 0, isMasking: true })
  return (
    <Input
      type="text"
      value={maskingValue.join('-')} //
      onChange={(e) => checkAllMasking(e.target.value)}
      maxLength={2}
      size="xsmall"
      label="카드 비밀번호"
    />
  )
}
