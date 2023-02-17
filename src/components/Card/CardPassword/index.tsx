import React from 'react'
import { Input } from '../../Element'

const CardPassword = ({ cardPassword, cardPasswordHandler }: CardPasswordProps) => {
  const { num1, num2 } = cardPassword
  return (
    <div className='input-container'>
      <span className='input-title'>카드 비밀번호</span>
      <Input id='num1' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value={num1} />
      <Input id='num2' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value={num2} />
      <Input id='num3' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value='0' />
      <Input id='num4' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value='0' />
    </div>
  )
}

export default CardPassword
