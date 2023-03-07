import React, { useReducer, useState } from 'react'
import { AddPaymentCard, AddOrUpdateCardType } from 'constants/card'
import { RegisterCard } from 'organisms/RegisterCard'
import './AddEditCraditCard.css'
import { FormChangeParams, FormProvider } from 'context/FormContext'
import {
  CardFormReducer,
  CARD_FORM_ACTION_TYPES,
} from 'reducers/CardFormReducer'
import { CompleteRegisterCard } from 'organisms/CompleteRegisterCard'

type AddEditCraditCardProps = {
  onNavigateGoBack: () => void
  selectCard: AddOrUpdateCardType
  submitCard: (card: AddOrUpdateCardType) => void
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigateGoBack,
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

  const onToggleCompleteCardRegister = () => {
    setIsCompleteRegister((prev) => !prev)
  }

  return (
    <FormProvider value={{ state, handleChange }}>
      {isCompleteRegister ? (
        <CompleteRegisterCard onSubmit={submitCard} />
      ) : (
        <RegisterCard
          onNavigate={onNavigateGoBack}
          onClickNextBtn={onToggleCompleteCardRegister}
        />
      )}
    </FormProvider>
  )
}

export default AddEditCraditCard
