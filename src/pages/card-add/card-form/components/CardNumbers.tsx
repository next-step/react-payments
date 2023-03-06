import { ChangeEvent, useRef } from 'react'

import { BasicInput } from '@/components/input'
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

  const handleCardNumbersInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target

    switch (name) {
      case 'first':
        handleChange({ value, order: name })
        break
      case 'second':
        handleChange({ value, order: name })
        break
      case 'third':
        handleChange({ value, order: name })
        break
      case 'fourth':
        handleChange({ value, order: name })
        break
      // Default에서 에러 던지기
    }
  }

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <BasicInput inputRef={firstRef} value={numbers.first} dataSet="first" onChange={handleCardNumbersInputChange} />
        {first.length === 4 && <span>-</span>}
        <BasicInput
          inputRef={secondRef}
          value={numbers.second}
          dataSet="second"
          onChange={handleCardNumbersInputChange}
        />
        {second.length === 4 && <span>-</span>}
        <BasicInput inputRef={thirdRef} value={numbers.third} dataSet="third" onChange={handleCardNumbersInputChange} />
        {third.length === 4 && <span>-</span>}
        <BasicInput
          inputRef={fourthRef}
          value={numbers.fourth}
          dataSet="fourth"
          onChange={handleCardNumbersInputChange}
        />
      </div>
    </div>
  )
}

export default CardNumbers
