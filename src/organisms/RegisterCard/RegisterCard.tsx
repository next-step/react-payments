import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { Header } from 'components/ui/Header'
import { AiOutlineLeft } from 'react-icons/ai'

import './RegisterCard.css'

import { useFormContext } from 'context/FormContext'
import { CardNumberField } from 'components/RegisterCardForm/CardNumberField'
import { FlexMainTemplate } from 'templates/FlexMainTemplate'
import { CardExpireDateField } from 'components/RegisterCardForm/CardExpireDateField'
import { CardOwnerField } from 'components/RegisterCardForm/CardOwnerField'
import { CVCField } from 'components/RegisterCardForm/CVCField'
import { PasswordField } from 'components/RegisterCardForm/PasswordField'
import { Button } from 'components/ui/Button'
import { UI_SIZE, UI_VARIANT } from 'constants/ui'
import { Card } from 'components/ui/Card'

type RegisterCardProps = {
  onNavigateGoBack: () => void
  onClickNextBtn: () => void
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  onNavigateGoBack,
  onClickNextBtn,
}) => {
  const { state } = useFormContext()

  const onSubmitRegisterCard = (e: FormEvent) => {
    e.preventDefault()
    onClickNextBtn()
  }

  return (
    <>
      <Header
        title='카드 추가'
        icon={<AiOutlineLeft />}
        onClickIcon={onNavigateGoBack}
      />
      <FlexMainTemplate>
        <Card card={state} size={UI_SIZE.SMALL} isShowNickname={false} />
        <form className='card-form' onSubmit={onSubmitRegisterCard}>
          <CardNumberField />
          <CardExpireDateField />
          <CardOwnerField />
          <CVCField />
          <PasswordField />
          <div className='button-box'>
            <Button
              type='submit'
              size={UI_SIZE.SMALL}
              variant={UI_VARIANT.GHOST}
              color='var(--color-primary)'
            >
              다음
            </Button>
          </div>
        </form>
      </FlexMainTemplate>
    </>
  )
}

export default RegisterCard
