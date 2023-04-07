import { useState, useContext } from 'react'

import { CardStateContext } from '@/contexts/card'

const useNavigationButtonWithValidation = () => {
  const { cardNumbers, owner, expiredYear, expiredMonth, passwords, securityCode } = useContext(CardStateContext)
  const [openToast, setOpenToast] = useState(false)

  const isValidCardNumber = ({ first, second, third, fourth }) =>
    /^[0-9]{4}$/.test(first) && /^[0-9]{4}$/.test(second) && /^[0-9]{4}$/.test(third) && /^[0-9]{4}$/.test(fourth)
  const isValidOwner = (owner) => owner.length <= 30
  const isValidYear = (year) => /^\d{2}$/.test(year)
  const isValidMonth = (month) => /^([1-9]|0[1-9]|1[0-2])$/.test(month)
  const isValidPassword = ({ first, second }) => /^[0-9]{1}$/.test(first) && /^[0-9]{1}$/.test(second)
  const isValidSecurityCode = (code) => /^\d{3}$/.test(code)

  const isValidCardInfo =
    isValidCardNumber(cardNumbers) &&
    isValidOwner(owner) &&
    isValidYear(expiredYear) &&
    isValidMonth(expiredMonth) &&
    isValidPassword(passwords) &&
    isValidSecurityCode(securityCode)

  const onBeforeNavigate = () => {
    if (!isValidCardInfo) {
      setOpenToast(true)
    }
  }
  return { onBeforeNavigate, openToast, setOpenToast, isValidCardInfo }
}

export default useNavigationButtonWithValidation
