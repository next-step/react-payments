import { ChangeEvent, useCallback, useState } from 'react'
import { CARD_START_NUM_LIST, CardCompanyName, CardStartNum, cardStartMatching } from '../../../context/paymentContext'
import { Input } from '../../common/Input'
import ui from '@/styles/index.module.css'
import PrivateNumber from '../PrivateNumber'
import useCardInfo from '@/hooks/useCardInfo'

enum CardNumberOrder {
  first,
  second,
  third,
  fourth,
}
export const CardNumber = () => {
  const { cardInfo, updateCardInfo, privateKeypad, setPrivateKeypad } = useCardInfo()
  const [cardNumberElements, setCardNumberElements] = useState<{ [name: string]: HTMLInputElement }>({})

  const [error, setError] = useState<{ position: string | null; message: string | null }>({
    position: null,
    message: null,
  })

  const attachCardNumberElements = useCallback(
    (element: HTMLInputElement | null) => {
      if (!element) return
      const { name } = element

      setCardNumberElements((prev) => ({ ...prev, [name]: element }))
    },
    [setCardNumberElements]
  )

  //카드 번호 업데이트
  const changeCardNumber = (key: string, value: string) => {
    updateCardInfo({
      ...cardInfo,
      cardNumber: {
        first: cardInfo.cardNumber?.first ?? '',
        second: cardInfo.cardNumber?.second ?? '',
        third: cardInfo.cardNumber?.third ?? '',
        fourth: cardInfo.cardNumber?.fourth ?? '',
        [key]: value,
      },
    })
  }

  //포커스
  const setFocus = () => {
    const targetFocusElement =
      cardNumberElements[CardNumberOrder[CardNumberOrder[privateKeypad.key as keyof typeof CardNumberOrder] + 1]]

    if (targetFocusElement && !targetFocusElement.value) {
      targetFocusElement.focus()
    } else {
      setPrivateKeypad(() => ({ key: '', isOpen: false }))
    }
  }

  //매칭되는 카드 찾기
  const getMatchingCardType = (value: string) => {
    const matchingKey = CARD_START_NUM_LIST.filter((num) => value.match(num))
    const matchingInfo = cardStartMatching[matchingKey[0]]

    return {
      name: matchingInfo ? (matchingInfo.type as CardCompanyName) : null,
      theme: matchingInfo ? matchingInfo.color : null,
      startNum: matchingKey[0] ? (matchingKey[0] as CardStartNum) : null,
    }
  }

  const handleFocus = (name: string) => {
    setPrivateKeypad(() => ({ key: name, isOpen: true }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    if (value.match(/[^0-9]/g)) {
      setError({ position: 'first', message: '숫자만 입력해주세요.' })
      return
    }

    if (name === 'first') {
      const cardType = getMatchingCardType(value.slice(0, 2))
      updateCardInfo({
        ...cardInfo,
        cardNumber: {
          second: cardInfo.cardNumber?.second ?? '',
          third: cardInfo.cardNumber?.third ?? '',
          fourth: cardInfo.cardNumber?.fourth ?? '',
          [name]: value,
        },
        cardType,
      })
    } else {
      changeCardNumber(name, value)
    }

    if (value.length === 4) {
      const targetFocusElement =
        cardNumberElements[CardNumberOrder[CardNumberOrder[name as keyof typeof CardNumberOrder] + 1]]

      if (targetFocusElement) {
        targetFocusElement.focus()
      }
    }

    setError({ position: null, message: null })
  }

  if (!cardInfo) return null
  return (
    <div className={ui['row-container']}>
      <p className={ui['input-title']}>카드번호</p>
      <div className={ui['input-row-container']}>
        <Input
          name="first"
          ref={attachCardNumberElements}
          value={cardInfo.cardNumber?.first ?? ''} //
          onChange={handleInputChange}
          type="text"
          maxLength={4}
        />
        <span>-</span>
        <Input
          name="second"
          ref={attachCardNumberElements}
          value={cardInfo.cardNumber?.second ?? ''} //
          onChange={handleInputChange}
          type="text"
          maxLength={4}
        />
        <span>-</span>
        <Input
          name="third"
          ref={attachCardNumberElements}
          value={cardInfo.cardNumber?.third ?? ''} //
          readOnly={true}
          onFocus={(name) => handleFocus(name)}
          type="password"
          maxLength={4}
        />
        <span>-</span>
        <Input
          name="fourth"
          ref={attachCardNumberElements}
          value={cardInfo.cardNumber?.fourth ?? ''} //
          readOnly={true}
          onFocus={(name) => handleFocus(name)}
          type="password"
          maxLength={4}
        />
      </div>
      {error && <span style={{ fontSize: '12px', color: 'tomato' }}>{error.message}</span>}

      {privateKeypad.key && (
        <PrivateNumber
          privateNumberLength={4}
          changeNumber={(number) => {
            changeCardNumber(privateKeypad.key, number)
          }}
          nextFocus={() => {
            setFocus()
          }}
          close={() => setPrivateKeypad(() => ({ key: '', isOpen: false }))}
        />
      )}
    </div>
  )
}
