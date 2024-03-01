import useMasking from '../../hooks/useMasking'
import { Input } from '../../stories/Input'
import ui from '../../styles/index.module.css'

export const CardPassword = () => {
  const [, maskingValue, , checkAllMasking] = useMasking({ totalText: 2, number: 2, divider: 0, isMasking: true })
  return (
    <div className={ui['input-container']}>
      <span className={ui['input-title']}>카드 비밀번호</span>
      <Input
        type="text"
        value={maskingValue.join('-')} //
        onChange={(e) => checkAllMasking(e.target.value)}
        maxLength={2}
        size="xsmall"
      />
    </div>
  )
}
