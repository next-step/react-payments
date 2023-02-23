import { useRef, ChangeEvent } from 'react'

import { useInputFocus } from '@/pages/card-add/card-form/hooks'

interface CardNumbersProps {
  numbers: {
    first: string
    second: string
    third: string
    fourth: string
  }
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

// Todo: Props로 State, setState가 결합되는걸 약하게 할 수 없을까?
const CardNumbers = ({ numbers, handleChange }: CardNumbersProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)
  useInputFocus([
    { ref: firstRef, maxLength: 4 },
    { ref: secondRef, maxLength: 4 },
    { ref: thirdRef, maxLength: 4 },
    { ref: fourthRef, maxLength: 4 },
  ])

  const { first, second, third } = numbers

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          ref={firstRef}
          className="input-basic"
          type="text"
          data-name="first"
          value={numbers.first}
          onChange={handleChange}
        />
        {first.length === 4 && <span>-</span>}
        <input
          ref={secondRef}
          className="input-basic"
          type="text"
          data-name="second"
          value={numbers.second}
          onChange={handleChange}
        />
        {second.length === 4 && <span>-</span>}
        <input
          ref={thirdRef}
          className="input-basic"
          type="password"
          data-name="third"
          value={numbers.third}
          onChange={handleChange}
        />
        {third.length === 4 && <span>-</span>}
        <input
          ref={fourthRef}
          className="input-basic"
          type="password"
          data-name="fourth"
          value={numbers.fourth}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CardNumbers
export const CardNumbersType = (
  <CardNumbers
    numbers={{ first: '', second: '', third: '', fourth: '' }}
    handleChange={(_: ChangeEvent<HTMLInputElement>) => _}
  />
).type
