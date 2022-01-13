import { InputDefaultProps, LIMITS } from '@common/constants'

const PasswordInput = ({
  name,
  elRef,
  ...props
}: InputDefaultProps & {
  name: string
  [key: string]: any
}) => (
  <input
    name={name}
    ref={elRef}
    className="input-basic w-15"
    required
    minLength={LIMITS.PASSWORD_SIZE}
    maxLength={LIMITS.PASSWORD_SIZE}
    type="password"
    pattern="^\d{1}$"
    {...props}
  />
)

export default PasswordInput
