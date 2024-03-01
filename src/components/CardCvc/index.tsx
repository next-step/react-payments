import useMasking from '../../hooks/useMasking'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export const CardCvc = () => {
  const [, maskingValue, , checkAllMasking] = useMasking({ totalText: 3, number: 3, divider: 0, isMasking: true })
  return (
    <div className={ui['input-container']}>
      <span className={ui['input-title']}>보안코드(CVC/CVV)</span>
      <Input
        type="text"
        value={maskingValue.join('-')} //
        onChange={(e) => checkAllMasking(e.target.value)}
        maxLength={3}
        size="small"
      />
    </div>
  )
}
