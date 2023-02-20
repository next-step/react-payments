import { useInputFocus } from '../../../hooks/useInputFocus'
import { Input } from '../../Element'

const CardNumber = ({ cardNumberData, cardNumberDataHandler }: CardNumberProps) => {
  const { num1, num2, num3, num4 } = cardNumberData
  const { num1Ref, num2Ref, num3Ref, num4Ref } = useInputFocus(cardNumberData)
  return (
    <div className='input-container'>
      <span className='input-title'>카드 번호</span>
      <div className='input-box'>
        <Input id='num1' inputRef={num1Ref} value={num1} onChange={cardNumberDataHandler} />
        <Input id='num2' inputRef={num2Ref} value={num2} onChange={cardNumberDataHandler} />
        <Input id='num3' inputRef={num3Ref} value={num3} type='password' onChange={cardNumberDataHandler} />
        <Input id='num4' inputRef={num4Ref} value={num4} type='password' onChange={cardNumberDataHandler} />
      </div>
    </div>
  )
}

export default CardNumber
