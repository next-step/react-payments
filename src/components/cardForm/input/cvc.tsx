import { InputDefaultProps, LIMITS } from '@/common/constants'
import KeypadWrapper from './keypadWrapper'

const CvcInput = ({ elRef, handleFocus }: InputDefaultProps & { handleFocus: () => void }) => (
  <input
    id="cvc"
    name="cvc"
    ref={elRef}
    className="input-basic"
    required
    onFocus={handleFocus}
    minLength={LIMITS.CVC_SIZE}
    maxLength={LIMITS.CVC_SIZE}
    type="password"
    pattern="^\d{3}$"
    data-testid="input-cvc"
  />
)

export default KeypadWrapper(CvcInput)
