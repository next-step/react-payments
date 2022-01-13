import { InputDefaultProps, LIMITS } from '@common/constants'

const MonthInput = ({ elRef }: InputDefaultProps) => (
  <input
    id="expiredMonth"
    name="expiredMonth"
    ref={elRef}
    className="input-basic"
    type="text"
    required
    placeholder="MM"
    pattern="^(0[1-9]|1[012])$"
    minLength={LIMITS.MONTH_SIZE}
    maxLength={LIMITS.MONTH_SIZE}
  />
)

export default MonthInput
