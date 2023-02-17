import Input from '../../Element/Input'

const CardNumber = ({ cardNumber, cardNumberHandler }: CardNumberProps) => {
  const { num1, num2, num3, num4 } = cardNumber
  return (
    <div className='input-container'>
      <span className='input-title'>카드 번호</span>
      <div className='input-box'>
        <Input id='num1' value={num1} onChange={cardNumberHandler} />
        <Input id='num2' value={num2} onChange={cardNumberHandler} />
        <Input id='num3' value={num3} type='password' onChange={cardNumberHandler} />
        <Input id='num4' value={num4} type='password' onChange={cardNumberHandler} />
      </div>
    </div>
  )
}

export default CardNumber
