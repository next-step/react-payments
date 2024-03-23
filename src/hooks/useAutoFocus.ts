import { useRef, MutableRefObject, ChangeEvent } from 'react'

type UseAutoFocusParams = {
  inputCount: number
}

export const useAutoFocus = ({ inputCount }: UseAutoFocusParams) => {
  const inputRefs = Array.from(
    { length: inputCount },
    useRef<HTMLInputElement>
  ) as MutableRefObject<HTMLInputElement>[]

  const focusNextInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.target
    const isMaxLength = value.length === maxLength
    const isFocusable = index < inputCount - 1

    if (isMaxLength && isFocusable) {
      inputRefs[index + 1].current?.focus()
    }
  }

  return { inputRefs, focusNextInput }
}
