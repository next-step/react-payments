import { RefObject } from 'react'

import { BasicInput } from '@/components/input'
import { useSequentialInputFocus } from '@/pages/hooks'

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
        <BasicInput inputRef={passwordRef.first} addtionalClassName="w-15" type="password" maxLength={1} />
        <BasicInput inputRef={passwordRef.second} addtionalClassName="w-15" type="password" maxLength={1} />

        <BasicInput
          inputRef={passwordRef.second}
          addtionalClassName="w-15 bg-white"
          type="password"
          value="x"
          readonly
        />
        <BasicInput
          inputRef={passwordRef.second}
          addtionalClassName="w-15 bg-white"
          type="password"
          value="x"
          readonly
        />
      </div>
    </div>
  )
}

export default CardPassword
