import { InputDefaultProps, LIMITS } from '@/common/constants'
import KeypadWrapper from './keypadWrapper'

const CardNumberAnonymousInput = ({
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
    type="password"
    inputMode="numeric"
    onFocus={handleFocus}
    minLength={LIMITS.CARD_NUMBER_SIZE}
    maxLength={LIMITS.CARD_NUMBER_SIZE}
    size={LIMITS.CARD_NUMBER_SIZE}
    required
    pattern="^\d{4}$"
    {...props}
    data-testid="input-card-number"
  />
)

export default KeypadWrapper(CardNumberAnonymousInput)
