import React, { ChangeEvent } from 'react'
import { UI_SIZE, UI_VARIANT } from 'constants/ui'
import { Card } from 'components/ui/Card'
import { Button } from 'components/ui/Button'
import './CompleteRegisterCard.css'
import { useFormContext } from 'context/FormContext'
import { CardNicknameField } from 'components/RegisterCardForm/CardNicknameField'
import { AddPaymentCard, PaymentCard } from 'constants/card'

type CompleteRegisterCardProps = {
  submit: (card: AddPaymentCard, id?: string) => void
  onNavigateNext: () => void
}

const CompleteRegisterCard: React.FC<CompleteRegisterCardProps> = ({
  submit,
  onNavigateNext,
}) => {
  const { state } = useFormContext()

  const onClickNextBtn = () => {
    console.log(state)
    submit(state)
    onNavigateNext()
  }

  return (
    <main className='complete-card-container'>
      <h2 className='page-title'>카드등록이 완료되었습니다.</h2>
      <Card card={state} size={UI_SIZE.LARGE} isShowNickname={false} />
      <div className='nickname-form'>
        <CardNicknameField />
      </div>

      <div className='button-box'>
        <Button
          size={UI_SIZE.MEDIUM}
          variant={UI_VARIANT.GHOST}
          color='green'
          onClick={onClickNextBtn}
        >
          다음
        </Button>
      </div>
    </main>
  )
}

export default CompleteRegisterCard
