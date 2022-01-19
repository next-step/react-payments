import { InputDefaultProps } from '@/common/constants'
import { RefObject } from 'react'
import KeypadModal from '@/components/modal/keypad'
import { SyntheticEvent, useState } from 'react'

const PasswordInput = ({
  name,
  elRef,
  pattern,
  testId,
  ...props
}: InputDefaultProps & {
  elRef: RefObject<HTMLInputElement>
  pattern: string
  [key: string]: any
}) => {
  const [showModal, toggleModal] = useState(false)

  const dispatchChangeValue = (el: HTMLInputElement, value: string) => {
    el.setAttribute('value', value)
    const ev = new Event('input', { bubbles: true })
    el.dispatchEvent(ev)
    if (el.checkValidity()) {
      toggleModal(false)
    }
  }

  const handleFocus = () => {
    const el = elRef.current as HTMLInputElement
    el.blur()
    toggleModal(true)
  }

  const onKeypadDown = (num: string) => {
    const el = elRef.current as HTMLInputElement
    dispatchChangeValue(el, el.value + num)
  }
  const onKeypadBack = (e: SyntheticEvent) => {
    e.preventDefault()
    const el = elRef.current as HTMLInputElement
    dispatchChangeValue(el, el.value.slice(0, -1))
  }

  return (
    <div className="keypad-wrap">
      <input
        id={name}
        name={name}
        ref={elRef}
        className="input-basic"
        type="password"
        inputMode="numeric"
        onFocus={handleFocus}
        required
        pattern={pattern}
        data-testid={testId}
        {...props}
      />
      {showModal && <KeypadModal handleKeypadDown={onKeypadDown} handleKeypadBack={onKeypadBack} />}
    </div>
  )
}
export default PasswordInput
