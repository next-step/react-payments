import { useRef, ChangeEvent } from 'react'

import { useSequentialInputFocus } from '@/pages/card-add/card-form/hooks'

interface CardPasswordProps {
  password: { first: string; second: string }
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardPassword = ({ password, handleChange }: CardPasswordProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstRef, isFocus: password.first.length === 1 },
    { ref: secondRef, isFocus: password.second.length === 1 },
  ])
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <input
          ref={firstRef}
          className="input-basic w-15"
          type="password"
          value={password.first}
          data-name="first"
          onChange={handleChange}
        />
        <input
          ref={secondRef}
          className="input-basic w-15"
          type="password"
          value={password.second}
          data-name="second"
          onChange={handleChange}
        />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </div>
  )
}

export default CardPassword
