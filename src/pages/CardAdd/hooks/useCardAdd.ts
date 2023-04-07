import { useRef } from 'react'

import { useSequentialInputFocus } from '@/pages/hooks'

const useCardAdd = () => {
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
  const expiredDateRef = { first: expiredYearRef, second: expiredMonthRef }

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

  return { numbersRef, passwordRef, expiredDateRef, ownerRef, securityCodeRef }
}

export default useCardAdd
