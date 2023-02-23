import { BackButton } from '@/components/button'
import { Card } from '@/components/card'
import { ButtonBox, PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo } from '@/pages/card-add/card-form/hooks'

function CardAdd() {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner, handleSecurityCode, handlePassword } = useCardInfo()

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" buttonElement={<BackButton />} />
        <Card {...cardInfo} />
        <CardForm>
          <CardForm.CardNumbers numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
          <CardForm.CardExpiredDate
            expiratedYear={cardInfo.expiratedYear}
            expiratedMonth={cardInfo.expiratedMonth}
            handleChange={handleExpiredDate}
          />
          <CardForm.CardOwner owner={cardInfo.owner} handleChange={handleOwner} />
          <CardForm.CardSecurityCode securityCode={cardInfo.securityCode} handleChange={handleSecurityCode} />
          <CardForm.CardPassword password={cardInfo.password} handleChange={handlePassword} />
        </CardForm>
        <ButtonBox to="/card-completed" storage={cardInfo} text="다음" />
      </div>
    </div>
  )
}

export default CardAdd
