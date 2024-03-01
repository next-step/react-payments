import ui from '../../styles/index.module.css'
import useDefaultInput from '../../hooks/useDefaultInput'

const ValidityInput = () => {
  const [, date, , handleValidity] = useDefaultInput()
  return (
    <input
      className={ui['input-basic']}
      value={date}
      onChange={(e) => {
        handleValidity(e.target.value)
      }}
      maxLength={5}
    />
  )
}

export default ValidityInput
