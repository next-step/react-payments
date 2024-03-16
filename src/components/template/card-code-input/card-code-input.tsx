import { BaseInput, BaseInputProps } from '@/components/organism/base-input'
import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state'
import { ChangeEvent, forwardRef, useImperativeHandle, useRef } from 'react'
import { createDisplayCardCode } from '@/utils/create-display-card-code'

export interface CardCodeInputHandle {
  focus: () => void
}

export interface CardCodeInputProps
  extends Omit<BaseInputProps, 'value' | 'onChange' | 'defaultValue'> {
  /** 마스킹 되는 카드 일련번호 뒷자리 수*/
  maskedLastDigit?: number
  /** 최대 입력 가능 자리 수 */
  maxDigit?: number
  /** card code 구분자 문자열 */
  separator?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** input이 완료될때 수행할 액션 */
  onInputComplete?: () => void
}

/**
 * 카드 번호를 입력한 input 컴포넌트
 */
export const CardCodeInput = forwardRef<CardCodeInputHandle, CardCodeInputProps>(
  (
    {
      maskedLastDigit = 8,
      maxDigit = 16,
      defaultValue,
      value,
      onChange,
      separator = ' - ',
      label,
      placeholder,
      onInputComplete,
      ...props
    },
    ref,
  ) => {
    const [cardCode, onChangeCardCode] = useUncontrolledInputState<string>({
      value,
      defaultValue,
      finalValue: '',
      onChange,
    })

    const baseInputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          baseInputRef.current?.focus()
        },
      }
    })

    const displayCardCode = createDisplayCardCode({
      value: cardCode,
      maskedLastDigit,
      maxDigit,
      separator,
    })

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const inputCode = e.target.value.split(separator).join('')
      const lastDigitDeletedCode = cardCode.slice(0, -1)
      const lastDigitAddedCode = cardCode + inputCode.at(-1)
      const isDeleteAction = inputCode.length < cardCode.length
      const newCardCode = isDeleteAction ? lastDigitDeletedCode : lastDigitAddedCode

      const isInvalidCardCode = isNaN(Number(newCardCode))
      const isOverMaxDigitCode = newCardCode.length > maxDigit
      if (isInvalidCardCode || isOverMaxDigitCode) return
      onChangeCardCode(newCardCode)

      if (newCardCode.length >= maxDigit) {
        onInputComplete?.()
      }
    }

    return (
      <>
        <BaseInput
          ref={baseInputRef}
          label={label}
          placeholder={placeholder}
          value={displayCardCode}
          onChange={handleChangeInput}
          {...props}
        />
        <input
          type="hidden"
          value={cardCode}
          onChange={() => {}}
          onFocus={() => {
            alert('focus?')
            baseInputRef.current?.focus()
          }}
        />
      </>
    )
  },
)
