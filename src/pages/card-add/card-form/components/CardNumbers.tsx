import { useRef } from 'react'

import { useSequentialInputFocus } from '@/pages/hooks'

interface HandleChangeProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}
interface CardNumbersProps {
  numbers: {
    first: string
    second: string
    third: string
    fourth: string
  }
  handleChange({ value, order }: HandleChangeProps): void
}

// Todo: Props로 State, setState가 결합되는걸 약하게 할 수 없을까?
const CardNumbers = ({ numbers, handleChange }: CardNumbersProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)
  useSequentialInputFocus([
    { ref: firstRef, isFocus: numbers.first.length === 4 },
    { ref: secondRef, isFocus: numbers.second.length === 4 },
    { ref: thirdRef, isFocus: numbers.third.length === 4 },
    { ref: fourthRef, isFocus: numbers.fourth.length === 4 },
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
          value={numbers.first}
          onChange={(event) => handleChange({ value: event.target.value, order: 'first' })}
        />
        {first.length === 4 && <span>-</span>}
        <input
          ref={secondRef}
          className="input-basic"
          type="text"
          value={numbers.second}
          onChange={(event) => handleChange({ value: event.target.value, order: 'second' })}
        />
        {second.length === 4 && <span>-</span>}
        <input
          ref={thirdRef}
          className="input-basic"
          type="password"
          value={numbers.third}
          onChange={(event) => handleChange({ value: event.target.value, order: 'third' })}
        />
        {third.length === 4 && <span>-</span>}
        <input
          ref={fourthRef}
          className="input-basic"
          type="password"
          value={numbers.fourth}
          onChange={(event) => handleChange({ value: event.target.value, order: 'fourth' })}
        />
      </div>
    </div>
  )
}

export default CardNumbers
