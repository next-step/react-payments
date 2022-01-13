import { InputDefaultProps, LIMITS } from '@common/constants'

const CardNumberAnonymousInput = ({
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
    className="input-basic"
    type="password"
    inputMode="numeric"
    minLength={LIMITS.CARD_NUMBER_SIZE}
    maxLength={LIMITS.CARD_NUMBER_SIZE}
    size={LIMITS.CARD_NUMBER_SIZE}
    required
    pattern="^\d{4}$"
    {...props}
  />
)
export default CardNumberAnonymousInput
