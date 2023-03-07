import React, { ChangeEvent, useContext, useState } from 'react'
import { Header } from 'components/molecules/Header'
import { AiOutlineLeft } from 'react-icons/ai'

import './RegisterCard.css'

import { useFormContext } from 'context/FormContext'
import { CardNumberField } from 'components/molecules/CardNumberField'
import { FlexMainTemplate } from 'templates/FlexMainTemplate'
import { CardExpireDateField } from 'components/molecules/CardExpireDateField'
import { CardOwnerField } from 'components/molecules/CardOwnerField'
import { CVCField } from 'components/molecules/CVCField'
import { PasswordField } from 'components/molecules/PasswordField'
import { Button } from 'components/atoms/Button'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'

type RegisterCardProps = {
  // card: PaymentCard
  onNavigate: () => void
  // changeValue: (value: string, name: CardTypeKeys) => void
  // isCompleteRegister: boolean
  onClickNextBtn: () => void
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  // card,
  onNavigate,
  // changeValue,
  // isCompleteRegister,
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
