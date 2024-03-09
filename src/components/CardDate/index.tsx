import useDefaultInput from '../../hooks/useDefaultInput'
import { Input } from '../../stories/Input'

export const CardDate = () => {
  const [, date, , handleValidity] = useDefaultInput()
  return (
    <Input
      type="text"
      value={date}
      onChange={(e) => {
        handleValidity(e.target.value)
      }}
      maxLength={5}
      placeholder="MM/YY"
      label="만료일"
    />
  )
}
