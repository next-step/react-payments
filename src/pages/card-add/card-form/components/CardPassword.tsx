import { useRef, ChangeEvent } from 'react'

import { useSequentialInputFocus } from '@/pages/card-add/card-form/hooks'

interface CardPasswordProps {
  password: { first: string; second: string }
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

const CardPassword = ({ handleChange }: CardPasswordProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)

  useSequentialInputFocus([
    { ref: firstRef, maxLength: 1 },
    { ref: secondRef, maxLength: 1 },
  ])

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <input ref={firstRef} className="input-basic w-15" type="password" onChange={handleChange} maxLength={1} />
        <input ref={secondRef} className="input-basic w-15" type="password" onChange={handleChange} maxLength={1} />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </div>
  )
}

export default CardPassword
