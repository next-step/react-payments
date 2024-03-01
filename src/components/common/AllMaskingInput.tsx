import ui from '../../styles/index.module.css'
import useMasking from '../../hooks/useMasking'
import { TInputProps } from './MaskingPartInput'

const AllMaskingInput = (props: TInputProps) => {
  const [, maskingValue, , checkAllMasking] = useMasking({ ...props })

  return (
    <input
      className={ui['input-basic']}
      value={maskingValue.join('-')} //
      onChange={(e) => checkAllMasking(e.target.value)}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  )
}

export default AllMaskingInput
