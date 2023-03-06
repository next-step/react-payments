import { useRef, useMemo } from 'react'

import { useCardInfo } from '@/pages/hooks'
import { getConvertedStringsByStars } from '@/utils'

const useCardAdd = () => {
  const {
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
    },
    handlePassword,
    handleSecurityCode,
  } = useCardInfo()

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

  const cardNumbersDisplay = useMemo(
    () => `${first} - ${second} - ${getConvertedStringsByStars(third)} - ${getConvertedStringsByStars(fourth)}`,
    [first, fourth, second, third],
  )

  const preNavigation = () => {
    const firstPasswordValue = firstPasswordRef.current?.value
    const secondPasswordValue = secondPasswordRef.current?.value
    if (firstPasswordValue && secondPasswordValue && handlePassword) {
      handlePassword({ first: firstPasswordValue, second: secondPasswordValue })
    }

    const securityCodeValue = securityCodeRef.current?.value
    if (securityCodeValue && handleSecurityCode) {
      handleSecurityCode(securityCodeValue)
    }
  }
  return { numbersRef, passwordRef, expiredDateRef, ownerRef, securityCodeRef, cardNumbersDisplay, preNavigation }
}

export default useCardAdd
