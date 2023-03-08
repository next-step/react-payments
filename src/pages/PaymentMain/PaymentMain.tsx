import React from 'react'
import { Header } from 'components/ui/Header'
import { AddOrUpdateCardType, PaymentCard } from 'constants/card'
import { CardList } from 'components/CardList'
import { FlexMainTemplate } from 'templates/FlexMainTemplate'

type PaymentMainProps = {
  onClick: (card: AddOrUpdateCardType) => void
  cards: PaymentCard[]
  onClickDeleteBtn: (id: string) => void
}

const PaymentMain: React.FC<PaymentMainProps> = ({
  onClick,
  cards,
  onClickDeleteBtn,
}) => {
  return (
    <>
      <Header title='보유 카드' />
      <FlexMainTemplate>
        <CardList
          cards={cards}
          onClick={onClick}
          isIncludeAddCardView
          onClickDeleteBtn={onClickDeleteBtn}
        />
      </FlexMainTemplate>
    </>
  )
}

export default PaymentMain
