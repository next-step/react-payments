import { useRef, useState } from 'react'

import { useSequentialInputFocus } from '@/pages/hooks'

const useCardAdd = () => {
  const [openValidToast, setOpenValidToast] = useState(false)

  // 카드 번호 Ref
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)
  const numbersRef = { first: firstRef, second: secondRef, third: thirdRef, fourth: fourthRef }

  // 패스워드 Ref
  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }

  // 만료일 Ref
  const expiredYearRef = useRef<HTMLInputElement>(null)
  const expiredMonthRef = useRef<HTMLInputElement>(null)
  const expiredDateRef = { first: expiredMonthRef, second: expiredYearRef }

  // 오너 Ref
  const ownerRef = useRef<HTMLInputElement>(null)

  // 보안코드 Ref
  const securityCodeRef = useRef<HTMLInputElement>(null)

  useSequentialInputFocus([
    { ref: numbersRef.first, maxLength: 4 },
    { ref: numbersRef.second, maxLength: 4 },
    { ref: numbersRef.third, maxLength: 4 },
    { ref: numbersRef.fourth, maxLength: 4 },
    { ref: expiredDateRef.first, maxLength: 2 },
    { ref: expiredDateRef.second, maxLength: 2 },
    { ref: ownerRef, maxLength: 30 },
    { ref: securityCodeRef, maxLength: 3 },
    { ref: passwordRef.first, maxLength: 1 },
    { ref: passwordRef.second, maxLength: 1 },
  ])

  const isValidCardNumber = ({ first, second, third, fourth }) =>
    /^[0-9]{4}$/.test(first.current?.value) &&
    /^[0-9]{4}$/.test(second.current?.value) &&
    /^[0-9]{4}$/.test(third.current?.value) &&
    /^[0-9]{4}$/.test(fourth.current?.value)
  const isValidOwner = (owner) => owner.length <= 30
  const isValidYear = (year) => /^\d{2}$/.test(year)
  const isValidMonth = (month) => /^([1-9]|0[1-9]|1[0-2])$/.test(month)
  const isValidPassword = ({ first, second }) =>
    /^[0-9]{1}$/.test(first.current?.value) && /^[0-9]{1}$/.test(second.current?.value)
  const isValidSecurityCode = (code) => /^\d{3}$/.test(code)

  const isValidCardInfo = () =>
    isValidCardNumber(numbersRef) &&
    isValidOwner(ownerRef.current?.value) &&
    isValidYear(expiredYearRef.current?.value) &&
    isValidMonth(expiredMonthRef.current?.value) &&
    isValidPassword(passwordRef) &&
    isValidSecurityCode(securityCodeRef.current?.value)

  const onBeforeNavigate = () => {
    if (!isValidCardInfo()) {
      setOpenValidToast(true)
    }
    if (isValidCardInfo()) {
      // 로컬 스토리지에 카드 색상 저장
    }
  }

  return {
    numbersRef,
    passwordRef,
    expiredDateRef,
    ownerRef,
    securityCodeRef,
    onBeforeNavigate,
    isValidCardInfo,
    openValidToast,
    setOpenValidToast,
  }
}

export default useCardAdd
