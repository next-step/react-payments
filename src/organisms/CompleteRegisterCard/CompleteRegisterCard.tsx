import React, { ChangeEvent } from 'react'
import { UI_SIZE, UI_VARIANT } from 'constants/ui'
import { Card } from 'components/ui/Card'
import { Button } from 'components/ui/Button'
import './CompleteRegisterCard.css'
import { useFormContext } from 'context/FormContext'
import { CardNicknameField } from 'components/RegisterCardForm/CardNicknameField'
import { AddPaymentCard, AddOrUpdateCardType } from 'constants/card'

type CompleteRegisterCardProps = {
  onSubmit: (card: AddOrUpdateCardType) => void
}

const CompleteRegisterCard: React.FC<CompleteRegisterCardProps> = ({
  onSubmit,
}) => {
  const { state } = useFormContext()

  const onSubmitRegisterCard = () => {
    onSubmit(state)
  }

  return (
    <form className='complete-card-container' onSubmit={onSubmitRegisterCard}>
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
          type='submit'
        >
          다음
        </Button>
      </div>
    </form>
  )
}

export default CompleteRegisterCard
