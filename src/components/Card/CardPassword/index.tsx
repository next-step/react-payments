import React from 'react'
import { Input } from '../../Element'

const CardPassword = ({ cardPassword, cardPasswordHandler }: CardPasswordProps) => {
  const { num1, num2 } = cardPassword
  return (
    <div className='input-container'>
      <span className='input-title'>카드 비밀번호</span>
      <Input name='num1' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value={num1} />
      <Input name='num2' className='input-basic w-15' type='password' onChange={cardPasswordHandler} value={num2} />
      <Input
        name='num3'
        className='input-basic w-15'
        type='password'
        onChange={cardPasswordHandler}
        value='0'
        disabled
      />
      <Input
        name='num4'
        className='input-basic w-15'
        type='password'
        onChange={cardPasswordHandler}
        value='0'
        disabled
      />
    </div>
  )
}

export default CardPassword
