import { InputDefaultProps } from '@/common/constants'

const BasicInput = ({
  name,
  size,
  pattern,
  testId,
  elRef,
  ...props
}: InputDefaultProps & {
  name: string
  pattern?: string
  autoFocus?: boolean
  [key: string]: any
}) => (
  <input
    id={name}
    name={name}
    ref={elRef}
    className="input-basic"
    type="text"
    pattern={pattern}
    minLength={size}
    maxLength={size}
    data-testid={testId}
    {...props}
  />
)

export default BasicInput
