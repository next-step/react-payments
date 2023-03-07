import React, { useReducer, useState } from 'react'
import { AddPaymentCard, PaymentCard } from 'constants/card'
import { RegisterCard } from 'organisms/RegisterCard'
import './AddEditCraditCard.css'
import { FormChangeParams, FormProvider } from 'context/FormContext'
import {
  CardFormReducer,
  CARD_FORM_ACTION_TYPES,
} from 'reducers/CardFormReducer'

type AddEditCraditCardProps = {
  onNavigateNext: () => void
  selectCard: PaymentCard | AddPaymentCard
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigateNext,
  selectCard,
}) => {
  const [state, dispatch] = useReducer(CardFormReducer, selectCard)

  const handleChange = (payload: FormChangeParams) => {
    dispatch({
      type: CARD_FORM_ACTION_TYPES.UPDATE,
      payload,
    })
  }

  const onNavigateNextStep = () => {
    // dispatch로 state 보내기
    // setIsComplete(true)
  }

  // const isCompleteRegister =
  //   validator.cardNumber &&
  //   validator.cardCompanyCode &&
  //   validator.password &&
  //   validator.pinCode &&
  //   validator.expireDate

  return (
    <FormProvider value={{ state, handleChange }}>
      <RegisterCard
        onNavigate={onNavigateNext}
        onClickNextBtn={onNavigateNextStep}
      />
      {/* <CompleteRegisterCard /> */}
    </FormProvider>
  )
}

export default AddEditCraditCard
