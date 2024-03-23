import { Card, Input } from '@/components/common'
import { CardNumber, MM, YY } from '@/components/common/Card/types'
import { PaymentContext } from '@/contexts/PaymentContext/PaymentProvider'
import { CardDetail } from '@/contexts/PaymentContext/types'
import { usePaymentStep } from '@/pages/hooks/usePaymentStep'
import { ChangeEventHandler, useContext } from 'react'

export const CompletedAddCardStep = () => {
  const [, setStep] = usePaymentStep()
  const { card, resetCardDetail, updateCardDetail, updateCardList } =
    useContext(PaymentContext)

  const handleChangeCardName: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target

    updateCardDetail({
      name: name as KeyOf<CardDetail>,
      value
    })
  }

  const handleClickNextButton = () => {
    updateCardList(card)
    resetCardDetail()
    setStep('card list')
  }

  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
          </div>
          <Card.Big
            number={card.number as CardNumber[]}
            expiry={card.expiry as [MM, YY]}
            owner={card.owner}
            name={card.name}
          />
          <div className="input-container flex-center w-100">
            <Input
              name="name"
              theme="underline"
              placeholder="카드의 별칭을 입력해주세요."
              onChange={handleChangeCardName}
            />
          </div>
          <div className="button-box mt-50">
            <span
              role="button"
              className="button-text"
              tabIndex={0}
              onClick={handleClickNextButton}>
              다음
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
