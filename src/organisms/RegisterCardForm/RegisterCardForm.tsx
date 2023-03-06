import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Input } from 'components/atoms/Input'
import { FormGroup } from 'components/molecules/FormGroup'
import {
  INIT_PAYMENT_CARD_INFO,
  INIT_PAYMENT_CARD_VALIDATE,
  PAYMENT_CARD_INFO,
} from 'constants/card'
import { REGEX } from 'constants/regex'
import { UI_VARIANT } from 'constants/ui.constant'
import {
  AddPaymentCard,
  CardExpireDateType,
  CardNumbersType,
  CardPasswordType,
  CardType,
  CardTypeKeys,
  PaymentCardValidate,
} from 'models/card.model'
import { CardNumberField } from 'components/molecules/CardNumberField'

type RegisterCardFormProps = {
  onSubmit: () => void
  card?: CardType
  onChangeCardInfo: (name: CardTypeKeys, value: string) => void
}

const RegisterCardForm: React.FC<RegisterCardFormProps> = ({
  onSubmit,
  // card,
  onChangeCardInfo,
}) => {
  const [card, setCard] = useState(INIT_PAYMENT_CARD_INFO)
  const ref = useRef(null)

  const [validate, setValidate] = useState(INIT_PAYMENT_CARD_VALIDATE)
  const onSubmitCardInfo = (e: FormEvent) => {
    e.preventDefault()
    /**
     * 카드 전체 정보 보내주기
     * 다음버튼 클릭하면, 전체 ref value를 보내면돼
     * ref를 보내자
     */
    console.log(ref)
    // onSubmit()
  }
  const {
    cardCompanyCode,
    cardExpireDate,
    cardNickname,
    cardNumbers,
    cardOwner,
    cardPinCode,
    cardPassword,
  } = card

  useEffect(() => {
    console.log(ref)
    console.log(ref.current)
    if (!ref.current) {
      return
    }
    const test = ref.current as any
    test.elements[1].focus()
    // 이전값과 비교해서 elements 가 input면 다음 focus
  }, [validate])

  const onChangeExpiredDate = () => {
    console.log(1)
  }

  const onChangeCardOwner = () => {
    console.log(1)
  }

  const onChangeCardPincode = () => {
    console.log(1)
  }

  const onChangeCardPassword = () => {
    console.log(1)
  }
  // 얘가 전체적으로 validate를 가지고 있어야돼?

  const onUpdateCardItem = (card: Partial<AddPaymentCard>) => {
    setCard((prev) => ({
      ...prev,
      ...card,
    }))
  }

  const onUpdateValidate = (cardValidate: Partial<PaymentCardValidate>) => {
    setValidate((prev) => ({
      ...prev,
      ...cardValidate,
    }))
  }
  //   const onChangeCardInfo = () => {}

  const onChangeCardNumbers = () => {}

  return (
    <form onSubmit={onSubmitCardInfo} ref={ref}>
      {/* <CardNumberField
        cardNumbers={cardNumbers}
        onChangeCardNumbers={onChangeCardNumbers}
      /> */}

      {/* <FormGroup
        label='만료일'
        isInvalid={false}
        input={
          <div style={{ width: '100px', display: 'flex' }}>
            {Object.keys(cardExpireDate).map((name, i) => (
              <Input
                key={i}
                name={name}
                type='string'
                width='100%'
                value={cardExpireDate[name as keyof CardExpireDateType]}
                onChange={onChangeExpiredDate}
                placeholder={name === 'month' ? 'MM/' : 'YY'}
              />
            ))}
          </div>
        }
      ></FormGroup>

      <FormGroup
        label={
          <>
            <span>카드소유자 이름(선택)</span>
            <span>{cardOwner.length}/30</span>
          </>
        }
        isInvalid={false}
        input={
          <Input
            name='cardOwner'
            type='string'
            maxLength={30}
            width='100%'
            placeholder='카드에 표시된 이름과 동일하게 입력하세요'
            value={cardOwner}
            onChange={onChangeCardOwner}
          />
        }
      ></FormGroup>

      <FormGroup
        label='보안코드(CVC/CVV)'
        isInvalid={false}
        input={
          <Input
            name='pinCode'
            type='password'
            maxLength={3}
            width='100%'
            value={cardPinCode}
            onChange={onChangeCardPincode}
          />
        }
      ></FormGroup>

      <FormGroup
        label='카드 비밀번호'
        isInvalid={false}
        input={
          <>
            {Object.keys(cardPassword).map((name, i) => (
              <Input
                key={i}
                name={name}
                type='password'
                maxLength={1}
                width='15%'
                value={cardPassword[name as keyof CardPasswordType]}
                onChange={onChangeCardPassword}
              />
            ))}
            <span>⦁</span>
            <span>⦁</span>
          </>
        }
      ></FormGroup> */}
      <button type='submit'>다음</button>
    </form>
  )
}

export default RegisterCardForm
