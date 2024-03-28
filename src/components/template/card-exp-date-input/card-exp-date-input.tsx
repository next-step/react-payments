import { forwardRef, useImperativeHandle, useRef } from 'react'
import { BaseInput, BaseInputContent, BaseInputProps } from '@/components/organism/base-input'
import * as styles from './card-exp-date-input.css'
import { Flex, Text } from '@/components'
import {
  useCardExpDateInputState,
  UseCardExpDateInputStateParams,
} from '@/components/template/card-exp-date-input/use-card-exp-date-input-state.ts'
import { getRepeatedPlaceholder } from './utils/get-date-placeholder.ts'

export interface CardExpDateInputHandle {
  focus: () => void
}

export interface CardExpDateInputProps
  extends UseCardExpDateInputStateParams,
    Omit<BaseInputProps, 'value' | 'onChange' | 'defaultValue'> {
  /** 입력 날짜값 자리수 */
  dateInputDigit?: number
  /** 입력 완료시 액션 */
  onInputComplete?: () => void
}

export const CardExpDateInput = forwardRef<CardExpDateInputHandle, CardExpDateInputProps>(
  (
    {
      separator = '/',
      dateInputDigit = 2,
      id,
      label,
      value,
      defaultValue,
      onChange,
      onInputComplete,
      ...otherInputProps
    }: CardExpDateInputProps,
    ref,
  ) => {
    const monthInputRef = useRef<HTMLInputElement>(null)
    const yearInputRef = useRef<HTMLInputElement>(null)

    const { expDate, monthInputValue, handleChangeMonth, yearInputValue, handleChangeYear } =
      useCardExpDateInputState({
        value,
        defaultValue,
        onChange,
        digit: dateInputDigit,
        onCompleteInputMonth: () => yearInputRef.current?.focus(),
        onCompleteInputYear: onInputComplete,
      })

    const monthId = `${id}-month`
    const yearId = `${id}-year`
    const labelHtmlFor = monthInputValue.length >= dateInputDigit ? yearId : monthId

    useImperativeHandle(ref, () => {
      return {
        focus: () => {
          if (monthInputValue.length >= dateInputDigit) {
            yearInputRef.current?.focus()
          } else {
            monthInputRef.current?.focus()
          }
        },
      }
    })

    return (
      <BaseInput htmlFor={labelHtmlFor} label={label} {...otherInputProps} width="180px">
        <div className={styles.wrapper}>
          <BaseInputContent
            ref={monthInputRef}
            id={`${id}-month`}
            placeholder={getRepeatedPlaceholder('M', dateInputDigit)}
            textAlign="right"
            maxLength={dateInputDigit}
            value={monthInputValue}
            onChange={handleChangeMonth}
            borderBottomRightRadius="none"
            borderTopRightRadius="none"
          />
          <Flex backgroundColor="gray100" height="46px" alignItems="center">
            <Text variant="body1" color="gray500">
              {separator}
            </Text>
          </Flex>
          <BaseInputContent
            ref={yearInputRef}
            id={`${id}-year`}
            placeholder={getRepeatedPlaceholder('Y', dateInputDigit)}
            maxLength={dateInputDigit}
            value={yearInputValue}
            onChange={handleChangeYear}
            borderTopLeftRadius="none"
            borderBottomLeftRadius="none"
          />
          <input type="hidden" value={expDate} onChange={() => {}} />
        </div>
      </BaseInput>
    )
  },
)
