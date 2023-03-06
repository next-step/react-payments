import { Input } from '@/components/input'
import { CardPasswordProps } from '@/pages/card-add/card-form/types'
import { useSequentialInputFocus } from '@/pages/hooks'

const CardPassword = ({ passwordRef }: CardPasswordProps) => {
  useSequentialInputFocus([
    { ref: passwordRef.first, maxLength: 1 },
    { ref: passwordRef.second, maxLength: 1 },
  ])

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <Input ref={passwordRef.first} addtionalClassName="w-15" type="password" maxLength={1} />
        <Input ref={passwordRef.second} addtionalClassName="w-15" type="password" maxLength={1} />

        <Input ref={passwordRef.second} addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
        <Input ref={passwordRef.second} addtionalClassName="w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </div>
  )
}

export default CardPassword
