import {
  forwardRef,
  KeyboardEvent,
  KeyboardEventHandler,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

type CardNumberHandle = {
  cardNumber: () => string
}

const CardNumberInput = forwardRef<CardNumberHandle, {}>((props, ref) => {
  const inputRef1 = useRef<HTMLInputElement | null>(null)
  const inputRef2 = useRef<HTMLInputElement | null>(null)
  const inputRef3 = useRef<HTMLInputElement | null>(null)
  const inputRef4 = useRef<HTMLInputElement | null>(null)

  useImperativeHandle(ref, () => ({
    cardNumber() {
      const value1 = inputRef1.current?.value ?? ''
      const value2 = inputRef2.current?.value ?? ''
      const value3 = inputRef3.current?.value ?? ''
      const value4 = inputRef4.current?.value ?? ''

      return `${value1}/${value2}/${value3}/${value4}`
    },
  }))

  return (
    <div>
      <input type="number" ref={inputRef1} max={9999} />
      <input type="number" ref={inputRef2} max={9999} />
      <input type="password" ref={inputRef3} maxLength={4} />
      <input type="password" ref={inputRef4} maxLength={4} />
    </div>
  )
})

export default CardNumberInput
