import { InputDefaultProps, LIMITS } from '@common/constants'

const CvcInput = ({ elRef }: InputDefaultProps) => (
  <input
    id="cvc"
    name="cvc"
    ref={elRef}
    className="input-basic w-25"
    required
    minLength={LIMITS.CVC_SIZE}
    maxLength={LIMITS.CVC_SIZE}
    type="password"
    pattern="^\d{3}$"
  />
)

export default CvcInput
