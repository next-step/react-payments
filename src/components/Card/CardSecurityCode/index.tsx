import React from 'react'
import { Input } from '../../Element'

const CardSecurityCode = ({ cardSecurityCode, cardSecurityCodeHandler }: CardSecurityCodeProps) => {
  const { num1 } = cardSecurityCode

  return (
    <div className='input-container'>
      <span className='input-title'>보안코드(CVC/CVV)</span>
      <Input name='num1' className='input-basic w-25' type='password' onChange={cardSecurityCodeHandler} value={num1} />
    </div>
  )
}

export default CardSecurityCode
