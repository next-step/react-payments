import { useEffect, RefObject } from 'react'

interface InputRef {
  ref: RefObject<HTMLInputElement>
  isFocus: boolean
}

//Todo: 입력하면 바로 다음 Input에 포커싱 될 수 있게
const useSequentialInputFocus = (inputs: InputRef[]) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent, index: number) => {
      const {
        isFocus,
        ref: { current: input },
      } = inputs[index]

      if (event.key === 'Backspace') return
      if (!input || !isFocus) return

      const nextInput = inputs[index + 1]?.ref.current
      if (!nextInput) return
      nextInput.focus()
    }

    inputs.forEach((ref, index) => {
      ref.ref.current?.addEventListener('keydown', (event) => handleKeyPress(event, index))
    })

    return () => {
      inputs.forEach(({ ref }, index) => {
        ref.current?.removeEventListener('keydown', (event) => handleKeyPress(event, index))
      })
    }
  }, [inputs])
}

export default useSequentialInputFocus
