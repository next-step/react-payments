import { useUncontrolledInputState } from '@/hooks/use-uncontrolled-input-state.ts'
import { ChangeEvent } from 'react'
import { isNil } from '@/utils'

export interface UseCardExpDateInputStateParams {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** 구분자 문자열 */
  separator?: string
  /** 입력 날짜 자리수 */
  digit?: number

  onCompleteInputMonth?: () => void
  onCompleteInputYear?: () => void
}

const getExpDateValue = (month: string, year: string, separator: string) =>
  [month, year].filter(v => !isNil(v) && v.length > 0).join(separator)

const getMonthYearPair = (expDate: string, separator: string) => expDate.split(separator)

export const useCardExpDateInputState = ({
  value,
  defaultValue,
  onChange,
  separator = '/',
  digit = 2,
  onCompleteInputMonth,
  onCompleteInputYear,
}: UseCardExpDateInputStateParams) => {
  const [expDate, handleChangeExpDate] = useUncontrolledInputState<string>({
    value,
    defaultValue,
    finalValue: '',
    onChange,
  })

  const [monthInputValue, yearInputValue] = getMonthYearPair(expDate, separator)

  const handleChangeMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const inputMonth = e.target.value
    if (isNaN(Number(inputMonth))) return
    if (Number(inputMonth) > 12) return
    if (inputMonth.length == 2 && Number(inputMonth) === 0) return
    handleChangeExpDate(
      [inputMonth, yearInputValue].filter(v => !isNil(v) && v.length > 0).join(separator),
    )
  }

  const handleChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    const inputYear = e.target.value
    if (isNaN(Number(inputYear))) return
    const newExpDate = getExpDateValue(monthInputValue, inputYear, separator)
    handleChangeExpDate(newExpDate)
    const [, newYear] = getMonthYearPair(newExpDate, separator)

    if (newYear.length >= digit) {
      onCompleteInputYear?.()
    }
  }

  return {
    expDate,
    monthInputValue: monthInputValue ?? '',
    yearInputValue: yearInputValue ?? '',
    handleChangeMonth,
    handleChangeYear,
  } as const
}
