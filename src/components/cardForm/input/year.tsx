import { InputDefaultProps, LIMITS } from '@/common/constants'

const YearInput = ({ elRef }: InputDefaultProps) => (
  <input
    name="expiredYear"
    ref={elRef}
    className="input-basic"
    type="text"
    required
    placeholder="YY"
    pattern="^(2[2-9]|[3-9][0-9])$"
    maxLength={LIMITS.YEAR_SIZE}
    minLength={LIMITS.YEAR_SIZE}
    data-testid="input-year"
  />
)

export default YearInput
