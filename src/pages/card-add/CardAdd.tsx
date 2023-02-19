import { Card } from '@/components/card'
import { NextButtonBox, PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo } from '@/pages/card-add/card-form/hooks'

/**
 * 카드 추가에 필요한 상태들을 useCardInfo 훅으로 관리할 것
 * 컴파운드로 내부 컴포넌트를 바깥에 드러낸 상태이므로 바로 전달 가능
 * 전체 필요한 상태와 카드 이미지에서 보이는 상태가 달라야 함
 * 전체 상태 -> 카드 넘버, 카드 만료일, 카드 주인, 카드 보안번호, 카드 비밀번호
 * 카드 이미지에서 보여야 하는 상태 -> 카드 번호, 카드 주인, 카드 만료일
 */
function CardAdd() {
  const {
    cardInfo,
    handleNumber,
    handleExpiredDate,
    handleOwner,
    handleSecurityCode,
    handlePassword,
  } = useCardInfo()

  return (
    <div className="root">
      <div className="app">
        <PageTitle title="카드 추가" />
        <Card {...cardInfo} />
        <CardForm>
          <CardForm.CardNumbers
            numbers={cardInfo.cardNumbers}
            handleChange={handleNumber}
          />
          <CardForm.CardExpiredDate
            expiratedYear={cardInfo.expiratedYear}
            expiratedMonth={cardInfo.expiratedMonth}
            handleChange={handleExpiredDate}
          />
          <CardForm.CardOwner
            owner={cardInfo.owner}
            handleChange={handleOwner}
          />
          <CardForm.CardSecurityCode
            securityCode={cardInfo.securityCode}
            handleChange={handleSecurityCode}
          />
          <CardForm.CardPassword
            password={cardInfo.password}
            handleChange={handlePassword}
          />
        </CardForm>
        <NextButtonBox />
      </div>
    </div>
  )
}

export default CardAdd
