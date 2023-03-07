import React, { useReducer, useState } from 'react'
import { AddPaymentCard, PaymentCard } from 'constants/card'
import { RegisterCard } from 'organisms/RegisterCard'
import './AddEditCraditCard.css'
import { FormChangeParams, FormProvider } from 'context/FormContext'
import {
  CardFormReducer,
  CARD_FORM_ACTION_TYPES,
} from 'reducers/CardFormReducer'
import { CompleteRegisterCard } from 'organisms/CompleteRegisterCard'

type AddEditCraditCardProps = {
  onNavigateNext: () => void
  selectCard: PaymentCard | AddPaymentCard
  submitCard: (card: AddPaymentCard, id?: string) => void
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigateNext,
  selectCard,
  submitCard,
}) => {
  const [state, dispatch] = useReducer(CardFormReducer, selectCard)
  const [isCompleteRegister, setIsCompleteRegister] = useState(false)

  const handleChange = (payload: FormChangeParams) => {
    dispatch({
      type: CARD_FORM_ACTION_TYPES.UPDATE,
      payload,
    })
  }

  const onNavigateNextStep = () => {
    setIsCompleteRegister(true)
    // dispatch로 state 보내기
    // setIsComplete(true)
  }

  return (
    <FormProvider value={{ state, handleChange }}>
      {isCompleteRegister ? (
        <CompleteRegisterCard
          submit={submitCard}
          onNavigateNext={onNavigateNext}
        />
      ) : (
        <RegisterCard
          onNavigate={onNavigateNext}
          onClickNextBtn={onNavigateNextStep}
        />
      )}
    </FormProvider>
  )
}

export default AddEditCraditCard
