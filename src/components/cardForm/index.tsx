import { createRef, SyntheticEvent, useMemo, useRef, useState } from 'react'
import { LIMITS } from '@/common/constants'
import { getCustomValidity, convertFormData } from '@/common/formServices'
import SelectModal from '../modal/selectModal'
import { BasicInput, PasswordInput } from './input'
import { useCardList } from '@/contexts/cardList'
import { useRouter } from '@/contexts/route'

const InputNames = [
  'cardNumber1',
  'cardNumber2',
  'cardNumber3',
  'cardNumber4',
  'expiredMonth',
  'expiredYear',
  'cvc',
  'pw1',
  'pw2',
  'userName',
]
const InputArray = Array.from({ length: InputNames.length })
const isNameMatched = (index: number, name: string) => InputNames[index] === name

const CardForm = () => {
  const { setRoute } = useRouter()
  const { setEditingCard } = useCardList()
  const formData = useMemo(() => new Map(), [])
  const inputRefs = InputArray.map(() => createRef<HTMLInputElement>())
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [inputValidity, setValid] = useState<boolean[]>(InputArray.map(() => false))
  const [showModal, setModalVisibility] = useState(false)
  const [nameSize, setNameSize] = useState(0)

  const fillForm = () => {
    ;[1234, 1234, 1234, 1234, 12, 33, 444, 5, 5, 'roy'].forEach((v, i) => {
      formData.set(inputRefs[i].current!.name, v + '')
    })
    formData.set('cardName', '크린카드')
    const cardData = convertFormData(formData)
    if (cardData) setEditingCard(cardData)
    saveCard()
  }

  const saveCard = () => {
    setRoute('ALIAS')
  }

  const setDataValue = (key: string, val: string) => {
    formData.set(key, val)
    const cardData = convertFormData(formData)
    if (cardData) setEditingCard(cardData)
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

    const index = inputRefs.findIndex(ref => ref.current === $target)
    const validityResult = getCustomValidity($target)
    $target.setCustomValidity(validityResult)
    const isValid = $target.reportValidity()

    setValid(prev => {
      const next = [...prev]
      next[index] = isValid
      return next
    })
    if (!isValid) return

    if (isNameMatched(index, 'cardNumber2')) {
      toggleModal(true)
      return
    }

    if (isNameMatched(index, 'pw2') && buttonRef.current) {
      buttonRef.current.focus()
      return
    }

    if (isNameMatched(index, 'userName')) {
      setNameSize($target.value.length)
    }

    const nextInput = inputRefs[index + 1]?.current
    if (nextInput) nextInput.focus()
  }

  const closeCardModal = () => {
    toggleModal(false)
    const $currentInput = inputRefs[1].current
    const $nextInput = inputRefs[2].current
    if ($currentInput && $nextInput) {
      $nextInput.focus()
    }
  }

  const selectCard = async (name: string) => {
    setDataValue('cardName', name)
    closeCardModal()
  }

  return (
    <form onSubmit={saveCard} onChange={handleChange}>
      <div className="input-container">
        <label htmlFor="cardNumber1" className="input-title">
          카드 번호
        </label>
        <div className="input-box">
          <BasicInput
            name={InputNames[0]}
            elRef={inputRefs[0]}
            pattern="^[0-9]{4}$"
            minLength={LIMITS.CARD_NUMBER_SIZE}
            maxLength={LIMITS.CARD_NUMBER_SIZE}
            testId="input-card-number"
            required
            autoFocus
          />

          {inputValidity[0] && ' - '}
          <BasicInput
            name={InputNames[1]}
            elRef={inputRefs[1]}
            pattern="^[0-9]{4}$"
            minLength={LIMITS.CARD_NUMBER_SIZE}
            maxLength={LIMITS.CARD_NUMBER_SIZE}
            testId="input-card-number"
            required
          />

          {inputValidity[1] && ' - '}
          <PasswordInput
            name={InputNames[2]}
            elRef={inputRefs[2]}
            pattern="^[0-9]{4}$"
            minLength={LIMITS.CARD_NUMBER_SIZE}
            maxLength={LIMITS.CARD_NUMBER_SIZE}
            testId="input-card-number"
            required
          />
          {inputValidity[2] && ' - '}
          <PasswordInput
            name={InputNames[3]}
            elRef={inputRefs[3]}
            pattern="^[0-9]{4}$"
            minLength={LIMITS.CARD_NUMBER_SIZE}
            maxLength={LIMITS.CARD_NUMBER_SIZE}
            testId="input-card-number"
            required
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="expiredMonth" className="input-title">
          만료일
        </label>
        <div className="input-box w-50">
          <BasicInput
            name={InputNames[4]}
            elRef={inputRefs[4]}
            pattern="^(0[1-9]|1[012])$"
            minLength={LIMITS.MONTH_SIZE}
            maxLength={LIMITS.MONTH_SIZE}
            testId="input-month"
            placeholder="MM"
            required
          />

          {inputValidity[4] && ' / '}
          <BasicInput
            name={InputNames[5]}
            elRef={inputRefs[5]}
            pattern="^(2[2-9]|[3-9][0-9])$"
            minLength={LIMITS.YEAR_SIZE}
            maxLength={LIMITS.YEAR_SIZE}
            testId="input-year"
            placeholder="YY"
            required
          />
        </div>
      </div>
      <div className="input-container">
        <label htmlFor="userName" className="input-title">
          카드 소유자 이름(선택) {nameSize} / {LIMITS.MAX_NAME_SIZE}
        </label>
        <BasicInput
          name={InputNames[9]}
          elRef={inputRefs[9]}
          maxLength={LIMITS.MAX_NAME_SIZE}
          testId="input-user-name"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </div>
      <div className="input-container">
        <label htmlFor="cvc" className="input-title">
          보안코드(CVC/CVV)
        </label>
        <PasswordInput
          name={InputNames[6]}
          elRef={inputRefs[6]}
          pattern="^[0-9]{3}$"
          size={LIMITS.CVC_SIZE}
          testId="input-cvc"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="pw1" className="input-title">
          카드 비밀번호
        </label>
        <div className="input-box w-50">
          <PasswordInput
            name={InputNames[7]}
            elRef={inputRefs[7]}
            pattern="^[0-9]{1}$"
            size={LIMITS.PASSWORD_SIZE}
            testId="input-password"
            required
          />
          <PasswordInput
            name={InputNames[8]}
            elRef={inputRefs[8]}
            pattern="^[0-9]{1}$"
            size={LIMITS.PASSWORD_SIZE}
            testId="input-password"
            required
          />
          <input className="input-basic" disabled value="*" type="password" />
          <input className="input-basic" disabled value="*" type="password" />
        </div>
      </div>
      <div className="button-box">
        <button type="button" className="button" onClick={fillForm}>
          [테스트]_폼채우기
        </button>
        <button type="submit" className="button" ref={buttonRef}>
          다음
        </button>
      </div>
      {showModal && <SelectModal selectCard={selectCard} closeModal={closeCardModal} />}
    </form>
  )
}
export default CardForm
