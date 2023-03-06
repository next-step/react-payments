import { BasicInput } from '@/components/input'
import { useCardNumbers } from '@/pages/card-add/card-form/hooks'

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
  const {
    firstValue,
    secondValue,
    thirdValue,
    fourthValue,
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    handleInputChange,
  } = useCardNumbers({ numbers, handleChange })

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <BasicInput inputRef={firstRef} value={firstValue} dataSet="first" onChange={handleInputChange} />
        {firstValue.length === 4 && <span>-</span>}
        <BasicInput inputRef={secondRef} value={secondValue} dataSet="second" onChange={handleInputChange} />
        {secondValue.length === 4 && <span>-</span>}
        <BasicInput inputRef={thirdRef} value={thirdValue} dataSet="third" onChange={handleInputChange} />
        {thirdValue.length === 4 && <span>-</span>}
        <BasicInput inputRef={fourthRef} value={fourthValue} dataSet="fourth" onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default CardNumbers
