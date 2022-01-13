import { InputDefaultProps, LIMITS } from '@common/constants'

const UserNameInput = ({ elRef }: InputDefaultProps) => (
  <input
    id="userName"
    name="userName"
    ref={elRef}
    type="text"
    defaultValue=""
    className="input-basic"
    placeholder="카드에 표시된 이름과 동일하게 입력하세요."
    maxLength={LIMITS.MAX_NAME_SIZE}
  />
)

export default UserNameInput
