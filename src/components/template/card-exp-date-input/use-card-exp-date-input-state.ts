import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state.ts'
import { ChangeEvent } from 'react'
import { isNil } from '@/utils'

export interface UseCardExpDateInputStateParams {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** 구분자 문자열 */
  separator?: string
}

export const useCardExpDateInputState = ({
  value,
  defaultValue,
  onChange,
  separator = '/',
}: UseCardExpDateInputStateParams) => {
  const [expDate, handleChangeExpDate] = useUncontrolledInputState<string>({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  })

  const [monthInputValue, yearInputValue] = expDate.split(separator)

  const handleChangeMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMonth = e.target.value
    if (isNaN(Number(inputMonth))) return
    if (Number(inputMonth) > 12) return
    handleChangeExpDate(
      [inputMonth, yearInputValue].filter(v => !isNil(v) && v.length > 0).join(separator),
    )
  }

  const handleChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const inputYear = e.target.value
    if (isNaN(Number(inputYear))) return
    handleChangeExpDate(
      [monthInputValue, inputYear].filter(v => !isNil(v) && v.length > 0).join(separator),
    )
  }
  return {
    expDate,
    monthInputValue: monthInputValue ?? '',
    yearInputValue: yearInputValue ?? '',
    handleChangeMonth,
    handleChangeYear,
  } as const
}
