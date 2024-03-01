import { useCallback, useContext, useEffect, useState } from 'react'
import { UpdateCardInfoContext } from '../context/paymentContext'

const useDefaultInput = () => {
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const [state, setState] = useState('')
  const [date, setDate] = useState('')

  const handleChange = (param: string) => {
    setState(param)
  }

  useEffect(() => {
    updateCardInfo({ name: state })
  }, [state])

  const matchMonthReg = new RegExp(/(0[1-9]|1[0-2])/g)
  const matchYearReg = new RegExp(/(2[4-9])/g)

  let month = ''
  let year = ''
  const handleValidity = useCallback((text: string) => {
    // const matchNum = text.match(matchMonthReg)?.join('/') || text
    // const matchYear = text.match(matchYearReg)?.join('/') || text
    // if (!month && text.match(matchMonthReg)) {
    //   month += text.match(matchMonthReg)
    //   month += '/'
    //   setDate(month)
    // } else if (month && text.match(matchYearReg)) {
    //   year += text.match(matchYearReg)
    //   setDate(month + matchYear)
    // } else {
    //   setDate(matchYear + '')
    // }
  }, [])

  return [state, date, handleChange, handleValidity] as const
}

export default useDefaultInput
