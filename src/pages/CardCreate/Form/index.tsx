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
    cardNumber() {
      return cardNumberRef.current?.cardNumber() ?? ''
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
