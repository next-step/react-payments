import { InputDefaultProps } from '@common/constants'

const CardNumberInput = ({
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
    type="text"
    required
    pattern="^\d{4}$"
    minLength={4}
    maxLength={4}
    {...props}
  />
)

export default CardNumberInput
