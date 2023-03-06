import { useEffect, RefObject } from 'react'

interface InputRef {
  ref: RefObject<HTMLInputElement>
  isFocus?: boolean
  maxLength?: number
}

const useSequentialInputFocus = (inputs: InputRef[]) => {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent, index: number) => {
      const {
        isFocus,
        ref: { current: input },
        maxLength,
      } = inputs[index]

      if (event.key === 'Backspace') return
      if (!input) return

      const nextInput = inputs[index + 1]?.ref.current
      if (!nextInput) return

      if (maxLength && input.value.length === maxLength) {
        nextInput.focus()
      }

      if (isFocus) {
        nextInput.focus()
      }
    }

    inputs.forEach((ref, index) => {
      ref.ref.current?.addEventListener('keyup', (event) => handleKeyUp(event, index))
    })

    return () => {
      inputs.forEach(({ ref }, index) => {
        ref.current?.removeEventListener('keyup', (event) => handleKeyUp(event, index))
      })
    }
  }, [inputs])
}

export default useSequentialInputFocus
