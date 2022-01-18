import { InputDefaultProps, LIMITS } from '@/common/constants'
import KeypadWrapper from './keypadWrapper'

const PasswordInput = ({
  name,
  elRef,
  handleFocus,
  ...props
}: InputDefaultProps & {
  name: string
  [key: string]: any
}) => (
  <input
    name={name}
    ref={elRef}
    className="input-basic"
    required
    minLength={LIMITS.PASSWORD_SIZE}
    maxLength={LIMITS.PASSWORD_SIZE}
    onFocus={handleFocus}
    type="password"
    pattern="^\d{1}$"
    {...props}
    data-testid="input-password"
  />
)

export default KeypadWrapper(PasswordInput)
