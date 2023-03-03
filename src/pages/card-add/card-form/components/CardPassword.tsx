import { RefObject } from 'react'

import { useSequentialInputFocus } from '@/pages/card-add/card-form/hooks'

interface CardPasswordProps {
  passwordRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
}

const CardPassword = ({ passwordRef }: CardPasswordProps) => {
  useSequentialInputFocus([
    { ref: passwordRef.first, maxLength: 1 },
    { ref: passwordRef.second, maxLength: 1 },
  ])

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <input ref={passwordRef.first} className="input-basic w-15" data-name="first" type="password" maxLength={1} />
        <input ref={passwordRef.second} className="input-basic w-15" data-name="second" type="password" maxLength={1} />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </div>
  )
}

export default CardPassword
