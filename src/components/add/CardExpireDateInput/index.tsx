import { useCallback, useEffect, useRef, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputBox, InputTitle } from '$components/common/Input'

interface CardExpireDateInputProps {
  cardExpireDate: Card['expireDate']
  setCardExpireDate: (expireDate: Card['expireDate']) => void
}

function CardExpireDateInput({ cardExpireDate, setCardExpireDate }: CardExpireDateInputProps) {
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const isValidInput = useCallback((value) => {
    if (/^\d{0,2}$/g.test(value)) return true
    return false
  }, [])

  const handleMonthChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      if (value.length === 2) yearRef.current?.focus()
      if (Number(value) > 12) return setMonth('12')
      setMonth(value)
    },
    [isValidInput],
  )
  const handleYearChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setYear(value)
    },
    [isValidInput],
  )
  useEffect(() => {
    setCardExpireDate({ month, year })
  }, [month, year, setCardExpireDate])

  useEffect(() => {
    const { month, year } = cardExpireDate

    setMonth(month)
    setYear(year)
  }, [cardExpireDate])

  return (
    <Input>
      <InputTitle>만료일</InputTitle>
      <InputBox className="w-50">
        <BasicInput type="text" value={month} onChange={handleMonthChange} ref={monthRef} placeholder="MM" />
        <BasicInput type="text" value={year} onChange={handleYearChange} ref={yearRef} placeholder="YY" />
      </InputBox>
    </Input>
  )
}

export default CardExpireDateInput
