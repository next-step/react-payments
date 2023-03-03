import { useEffect, useRef } from 'react'

import { useSequentialInputFocus, useCardInfo } from '@/pages/card-add/card-form/hooks'

const CardPassword = () => {
  const { handlePassword } = useCardInfo()

  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstPasswordRef, maxLength: 1 },
    { ref: secondPasswordRef, maxLength: 1 },
  ])

  useEffect(() => {
    handlePassword({ first: firstPasswordRef, second: secondPasswordRef })
  }, [handlePassword, firstPasswordRef, secondPasswordRef])

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="input-password-container">
        <input ref={firstPasswordRef} className="input-basic w-15" data-name="first" type="password" maxLength={1} />
        <input ref={secondPasswordRef} className="input-basic w-15" data-name="second" type="password" maxLength={1} />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
        <input className="input-basic w-15 bg-white" type="password" value="x" readOnly />
      </div>
    </div>
  )
}

export default CardPassword
