import useMasking from '../../hooks/useMasking'
import { Input } from '../../stories/Input'

export const CardCvc = () => {
  const [, maskingValue, , checkAllMasking] = useMasking({ totalText: 3, number: 3, divider: 0, isMasking: true })
  return (
    <Input
      type="text"
      value={maskingValue.join('-')} //
      onChange={(e) => checkAllMasking(e.target.value)}
      maxLength={3}
      size="small"
      label="보안코드(CVC/CVV)"
    />
  )
}
