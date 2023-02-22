import { Input } from '../../Element'

const CardNumber = ({ cardNumberData, cardNumberDataHandler }: CardNumberProps) => {
  const { num1, num2, num3, num4 } = cardNumberData
  return (
    <div className='input-container'>
      <span className='input-title'>카드 번호</span>
      <div className='input-box'>
        <Input className='input-basic' name='num1' value={num1} onChange={cardNumberDataHandler} />
        <Input className='input-basic' name='num2' value={num2} onChange={cardNumberDataHandler} />
        <Input className='input-basic' name='num3' value={num3} type='password' onChange={cardNumberDataHandler} />
        <Input className='input-basic' name='num4' value={num4} type='password' onChange={cardNumberDataHandler} />
      </div>
    </div>
  )
}

export default CardNumber
