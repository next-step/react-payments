import { useState, ChangeEvent } from 'react'

import { Card } from '@/components/card'
import { NextButtonBox, PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { isNumber } from '@/utils'

/**
 * 카드 추가에 필요한 상태들을 useCardInfo 훅으로 관리할 것
 * 컴파운드로 내부 컴포넌트를 바깥에 드러낸 상태이므로 바로 전달 가능
 * 전체 필요한 상태와 카드 이미지에서 보이는 상태가 달라야 함
 * 전체 상태 -> 카드 넘버, 카드 만료일, 카드 주인, 카드 보안번호, 카드 비밀번호
 * 카드 이미지에서 보여야 하는 상태 -> 카드 번호, 카드 주인, 카드 만료일
 */
function CardAdd() {
  const [cardInfo, setCardInfo] = useState({
    cardNumbers: { first: '', second: '', third: '', fourth: '' },
    name: '',
    expiratedYear: '',
    expiratedMonth: '',
    owner: '',
  })

  const handleCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (!isNumber(value)) return
    switch (name) {
      case 'first':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, first: value },
        }))
        break
      case 'second':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, second: value },
        }))
        break
      case 'third':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, third: value },
        }))
        break
      case 'fourth':
        if (value.length > 4) return
        setCardInfo((prev) => ({
          ...prev,
          cardNumbers: { ...prev.cardNumbers, fourth: value },
        }))
        break
    }
  }

  const handleCardExpiredDate = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      dataset: { name },
      value,
    } = event.target
    if (!isNumber(value)) return
    switch (name) {
      case 'YY':
        setCardInfo((prev) => ({ ...prev, expiratedYear: value }))
        break
      case 'MM':
        //Todo: 월은 1 이상 12 엣지케이스 고려
        setCardInfo((prev) => ({ ...prev, expiratedMonth: value }))
        break
    }
  }

  const handleCardOwner = (event: ChangeEvent<HTMLInputElement>) => {
    setCardInfo((prev) => ({ ...prev, owner: event.target.value }))
  }

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" />
        <Card {...cardInfo} />
        <CardForm>
          <CardForm.CardNumbers
            numbers={cardInfo.cardNumbers}
            handleChange={handleCardNumber}
          />
          <CardForm.CardExpiredDate
            expiratedYear={cardInfo.expiratedYear}
            expiratedMonth={cardInfo.expiratedMonth}
            handleChange={handleCardExpiredDate}
          />
          <CardForm.CardOwner
            owner={cardInfo.owner}
            handleChange={handleCardOwner}
          />
          <CardForm.CardSecurityCode />
          <CardForm.CardPassword />
        </CardForm>
        <NextButtonBox />
      </div>
    </div>
  )
}

export default CardAdd
