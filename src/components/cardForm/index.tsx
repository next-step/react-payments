import { createRef, SyntheticEvent, useMemo, useRef, useState } from 'react'
import { CardData, LIMITS } from '@/common/constants'
import { getCustomValidity, convertFormData } from '@/common/formServices'
import SelectModal from '../modal/selectModal'
import {
  CardNumberInput,
  CardNumberAnonymousInput,
  MonthInput,
  YearInput,
  CvcInput,
  PasswordInput,
  UserNameInput,
} from './input'

const TotalInputCount = 10
const InputArray = Array.from({ length: TotalInputCount })

const CardForm = ({ saveCard, setCardData }: { saveCard: () => void; setCardData: (v: CardData) => void }) => {
  const formData = useMemo(() => new Map(), [])
  const inputRefs = InputArray.map(() => createRef<HTMLInputElement>())
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [inputValidity, setValid] = useState<boolean[]>(InputArray.map(() => false))
  const [showModal, setModalVisibility] = useState(false)
  const [nameSize, setNameSize] = useState(0)

  const setDataValue = (key: string, val: string) => {
    formData.set(key, val)
    const cardData = convertFormData(formData)
    if (cardData) setCardData(cardData)
  }

  const toggleModal = (flag: boolean) => {
    inputRefs.forEach(ref => {
      if (ref.current) ref.current.disabled = flag
    })
    setModalVisibility(flag)
  }

  const handleChange = (e: SyntheticEvent) => {
    const $target = e.target
    if (!($target instanceof HTMLInputElement)) return

    setDataValue($target.name, $target.value)

    const targetIndex = inputRefs.findIndex(ref => ref.current === $target)
    const validityResult = getCustomValidity($target)
    $target.setCustomValidity(validityResult)
    const isValid = $target.reportValidity()

    setValid(prev => {
      const next = [...prev]
      next[targetIndex] = isValid
      return next
    })
    if (!isValid) return

    if (targetIndex === 1) {
      // cardNumber2 valid 시점
      toggleModal(true)
      return
    }

    if (targetIndex === 8 && buttonRef.current) {
      // pw2
      buttonRef.current.focus()
      return
    }

    if (targetIndex === 9) {
      // userName
      setNameSize($target.value.length)
    }

    const nextInput = inputRefs[targetIndex + 1]?.current
    if (nextInput) nextInput.focus()
  }

  const selectCard = (name: string) => {
    setDataValue('cardName', name)
    toggleModal(false)
    const $currentInput = inputRefs[1].current
    const $nextInput = inputRefs[2].current
    if ($currentInput && $nextInput) {
      $nextInput.focus()
    }
  }

  return (
    <form onSubmit={saveCard} onChange={handleChange}>
      <div className="input-container">
        <label htmlFor="cardNumber1" className="input-title">
          카드 번호
        </label>
        <div className="input-box">
          <CardNumberInput name="cardNumber1" elRef={inputRefs[0]} autoFocus />

          {inputValidity[0] ? ' - ' : ''}
          <CardNumberInput name="cardNumber2" elRef={inputRefs[1]} />

          {inputValidity[1] ? ' - ' : ''}
          <CardNumberAnonymousInput name="cardNumber3" elRef={inputRefs[2]} />

          {inputValidity[2] ? ' - ' : ''}
          <CardNumberAnonymousInput name="cardNumber4" elRef={inputRefs[3]} />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="expiredMonth" className="input-title">
          만료일
        </label>
        <div className="input-box w-50">
          <MonthInput elRef={inputRefs[4]} />

          {inputValidity[4] ? ' / ' : ''}
          <YearInput elRef={inputRefs[5]} />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="userName" className="input-title">
          카드 소유자 이름(선택) {nameSize} / {LIMITS.MAX_NAME_SIZE}
        </label>
        <UserNameInput elRef={inputRefs[9]} />
      </div>
      <div className="input-container">
        <label htmlFor="cvc" className="input-title">
          보안코드(CVC/CVV)
        </label>
        <CvcInput elRef={inputRefs[6]} />
      </div>
      <div className="input-container">
        <label htmlFor="pw1" className="input-title">
          카드 비밀번호
        </label>
        <PasswordInput id="pw1" name="pw1" elRef={inputRefs[7]} />
        <PasswordInput name="pw2" elRef={inputRefs[8]} />
        <input className="input-basic w-15" disabled value="*" type="password" />
        <input className="input-basic w-15" disabled value="*" type="password" />
      </div>
      <div className="button-box">
        <button type="submit" className="button" ref={buttonRef}>
          다음
        </button>
      </div>
      {showModal ? <SelectModal selectCard={selectCard} closeModal={() => toggleModal(false)} /> : null}
    </form>
  )
}
export default CardForm
