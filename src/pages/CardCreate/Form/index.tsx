import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { CardFormProps } from '..'
import Styled from './index.style'
import CardNumberInput from './Number'

// interface CreateCardFormProps {
//   ref: MutableRefObject<CardFormProps | null>
// }

const CreateCardForm = forwardRef<CardFormProps, {}>((_, ref) => {
  const cardNumberRef = useRef<React.ElementRef<typeof CardNumberInput>>(null)

  useImperativeHandle(ref, () => ({
    cardNumber1() {
      return cardNumberRef.current?.cardNumber1() ?? ''
    },
    cardNumber2() {
      return cardNumberRef.current?.cardNumber2() ?? ''
    },
    cardNumber3() {
      return cardNumberRef.current?.cardNumber3() ?? ''
    },
    cardNumber4() {
      return cardNumberRef.current?.cardNumber4() ?? ''
    },
    cvc() {
      return ''
    },
    expiredAt() {
      return ''
    },
    password() {
      return ''
    },
    name() {
      return ''
    },
  }))

  return (
    <div>
      <CardNumberInput ref={cardNumberRef} />
    </div>
  )
})
// const CreateCardForm = ({ ref }: CreateCardFormProps) => {
//   return (
//     <div>
//       <CardNumberInput ref={ref} />
//     </div>
//   )
// }

export default CreateCardForm
