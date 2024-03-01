import { TInputProps } from './MaskingPartInput'
import ui from '../../styles/index.module.css'
import useDefaultInput from '../../hooks/useDefaultInput'

const StringInput = (props: Partial<TInputProps>) => {
  const [state, handleChange] = useDefaultInput()

  return (
    <input
      className={ui['input-basic']}
      value={state} //
      onChange={(e) => handleChange(e.target.value)}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  )
}

export default StringInput
