import { ChangeEvent } from 'react'

interface CardPasswordProps {
  password: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardPassword = ({ password, handleChange }: CardPasswordProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-60"
        type="password"
        value={password}
        onChange={handleChange}
      />
      {/* Todo: 비밀번호 입력 방식 수정 필요 */}
      {/* <input className="input-basic w-15" type="password" />
      <input className="input-basic w-15" type="password" />
      <input className="input-basic w-15" type="password" /> */}
    </div>
  )
}

export default CardPassword
export const CardPasswordType = (
  <CardPassword
    password=""
    handleChange={(event: ChangeEvent<HTMLInputElement>) => {
      console.log(event)
    }}
  />
).type
