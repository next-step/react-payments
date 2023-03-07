import React, { ChangeEvent, useContext, useState } from 'react'
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

type RegisterCardProps = {
  onNavigate: () => void
  onClickNextBtn: () => void
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  onNavigate,
  onClickNextBtn,
}) => {
  const { state, handleChange } = useFormContext()

  return (
    <>
      <Header
        title='카드 추가'
        icon={<AiOutlineLeft />}
        onClickIcon={onNavigate}
      />
      <FlexMainTemplate>
        {/* <Card card={state} size={UI_SIZE.SMALL} isShowNickname={false} /> */}
        <form className='card-form'>
          <CardNumberField />
          <CardExpireDateField />
          <CardOwnerField />
          <CVCField />
          <PasswordField />
          <Button
            type='submit'
            size={UI_SIZE.SMALL}
            variant={UI_VARIANT.GHOST}
            color='var(--color-primary)'
            onClick={onClickNextBtn}
          >
            다음
          </Button>
        </form>
      </FlexMainTemplate>
    </>
  )
}

export default RegisterCard
