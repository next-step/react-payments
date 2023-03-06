import { Input, InputTitle } from '@/components/input'
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
      <InputTitle>카드 번호</InputTitle>
      <div className="input-box">
        <Input ref={firstRef} value={firstValue} data-name="first" onChange={handleInputChange} />
        {firstValue.length === 4 && <span>-</span>}
        <Input ref={secondRef} value={secondValue} data-name="second" onChange={handleInputChange} />
        {secondValue.length === 4 && <span>-</span>}
        <Input ref={thirdRef} value={thirdValue} data-name="third" onChange={handleInputChange} />
        {thirdValue.length === 4 && <span>-</span>}
        <Input ref={fourthRef} value={fourthValue} data-name="fourth" onChange={handleInputChange} />
      </div>
    </div>
  )
}

export default CardNumbers
