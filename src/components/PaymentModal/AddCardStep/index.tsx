import {
  Card,
  BottomSheet,
  Input,
  MaxLengthNumberInput,
  CardNumberInput,
  CardDateInput,
  CardPasswordInput
} from '@/components/common'
import { CardNumber, MM, YY } from '@/components/common/Card/types'
import { useDisclosure } from '@/hooks'
import { usePaymentStep } from '@/pages/hooks/usePaymentStep'
import { ChangeEventHandler, FormEventHandler, useContext } from 'react'
import { css } from '@emotion/css'
import { PaymentContext } from '@/contexts/PaymentContext/PaymentProvider'
import { CardDetail } from '@/contexts/PaymentContext/types'

export const AddCardStep = () => {
  const [, setStep] = usePaymentStep()

  const { card, updateCardDetail } = useContext(PaymentContext)
  const { opened, close, open } = useDisclosure()

  const hasValue = Object.values(card).some(value =>
    Array.isArray(value) ? value.some(_value => _value !== '') : value !== ''
  )

  const handleChangeCardDetail: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target
    const [key, index] = name.split('.')

    updateCardDetail({
      name: key as KeyOf<CardDetail>,
      index,
      value
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    close()
    setStep('completed add card')
  }

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">카드 추가</h2>
        {hasValue ? (
          <Card.Small
            number={card.number as CardNumber[]}
            expiry={card.expiry as [MM, YY]}
            owner={card.owner}
            name={card.name}
          />
        ) : (
          <Card.Empty />
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <CardNumberInput
              name="number"
              values={card.number}
              onChange={handleChangeCardDetail}
            />
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <CardDateInput
              name="expiry"
              values={card.expiry}
              onChange={handleChangeCardDetail}
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <Input
              name="owner"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength={30}
              value={card.owner}
              onChange={handleChangeCardDetail}
            />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <MaxLengthNumberInput
              name="cvc"
              width="25%"
              maxLength={3}
              value={card.cvc}
              onChange={handleChangeCardDetail}
              required
            />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <CardPasswordInput
              name="password"
              values={card.password}
              onChange={handleChangeCardDetail}
            />
          </div>
          <div className="button-box">
            <span
              role="button"
              className="button-text"
              onClick={open}
              tabIndex={0}>
              다음
            </span>
          </div>
          <BottomSheet isOpen={opened} close={close}>
            <div className="flex-center">
              <button
                className={css(['modal-item-container', buttonStyle])}
                onClick={() =>
                  updateCardDetail({
                    name: 'bank',
                    value: 'clean'
                  })
                }
                tabIndex={0}>
                <div className="modal-item-dot"></div>
                <span className="modal-item-name">클린 카드</span>
              </button>
            </div>
          </BottomSheet>
        </form>
      </div>
    </div>
  )
}

const buttonStyle = css`
  border: none;
  background: none;
  cursor: pointer;
`
