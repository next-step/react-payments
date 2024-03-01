import ui from '../../styles/index.module.css'
import useDefaultInput from '../../hooks/useDefaultInput'
import { Input } from '../../stories/Input'

export const CardDate = () => {
  const [, date, , handleValidity] = useDefaultInput()
  return (
    <div className={ui['input-container']}>
      <span className={ui['input-title']}>만료일</span>
      <div className={`${ui['input-box']} ${ui['w-50']}`}>
        <Input
          type="text"
          value={date}
          onChange={(e) => {
            handleValidity(e.target.value)
          }}
          maxLength={5}
          placeholder="MM/YY"
        />
      </div>
    </div>
  )
}
