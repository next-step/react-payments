import { InputDefaultProps } from '@/common/constants'
import KeypadModal from '@/components/modal/keypad'
import { SyntheticEvent, useState } from 'react'

const KeypadWrapper =
  (Component: (props: any) => JSX.Element) =>
  ({
    elRef,
    ...props
  }: InputDefaultProps & {
    name: string
    elRef: React.RefObject<HTMLInputElement>
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
        <Component elRef={elRef} handleFocus={handleFocus} {...props} />
        {showModal ? (
          <KeypadModal handleKeypadDown={onKeypadDown} handleKeypadBack={onKeypadBack} />
        ) : null}
      </div>
    )
  }

export default KeypadWrapper
