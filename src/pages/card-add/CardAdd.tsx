import { BackButton, NavigationTextButton } from '@/components/button'
import { Card } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo } from '@/pages/card-add/card-form/hooks'

function CardAdd() {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner } = useCardInfo()

  return (
    <div className="app">
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <Card {...cardInfo} />
      <CardForm>
        <CardForm.CardNumbers numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
        <CardForm.CardExpiredDate
          expiredYear={cardInfo.expiredYear}
          expiredMonth={cardInfo.expiredMonth}
          handleChange={handleExpiredDate}
        />
        <CardForm.CardOwner owner={cardInfo.owner} handleChange={handleOwner} />
        <CardForm.CardSecurityCode />
        <CardForm.CardPassword />
      </CardForm>
      <NavigationTextButton to="/card-completed" storage={cardInfo} text="다음" />
    </div>
  )
}

export default CardAdd
