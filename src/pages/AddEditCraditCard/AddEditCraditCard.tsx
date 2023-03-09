import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { AddOrUpdateCardType, PAYMENT_CARD_FORM_KEYS } from 'constants/card'
import { RegisterCard } from 'organisms/RegisterCard'
import './AddEditCraditCard.css'
import { FormChangeParams, FormProvider } from 'context/FormContext'
import {
  CardFormReducer,
  CARD_FORM_ACTION_TYPES,
} from 'reducers/CardFormReducer'
import { useDialogContext } from 'context/DialogContext'
import { CompleteRegisterCard } from 'organisms/CompleteRegisterCard'
import { CardCompanyList } from 'components/CardCompanyList'
import {
  CardCompanyCodeType,
  CARD_COMPNAYS_CODE,
} from 'constants/cardCompanyCode'

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
  const { openDialog, closeDialog } = useDialogContext()

  const handleChange = (payload: FormChangeParams) => {
    dispatch({
      type: CARD_FORM_ACTION_TYPES.UPDATE,
      payload,
    })
  }

  const onToggleCompleteCardRegister = () => {
    setIsCompleteRegister((prev) => !prev)
  }

  const onChangeCardCompany = useCallback(
    (cardComapnyCode: CardCompanyCodeType) => {
      handleChange({
        key: PAYMENT_CARD_FORM_KEYS.CARD_COMPANY_CODE,
        value: cardComapnyCode,
      })
      closeDialog()
    },
    [closeDialog],
  )

  useEffect(() => {
    const { cardNumbers, cardCompanyCode } = state
    const isValidateCardNumbers = Object.values(cardNumbers).every(
      (val) => val.length === 4,
    )

    if (isValidateCardNumbers && cardCompanyCode === CARD_COMPNAYS_CODE.NULL) {
      openDialog({
        component: <CardCompanyList onClick={onChangeCardCompany} />,
      })
    }
  }, [state.cardNumbers])

  return (
    <FormProvider value={{ state, handleChange }}>
      {isCompleteRegister ? (
        <CompleteRegisterCard onSubmit={submitCard} />
      ) : (
        <RegisterCard
          onNavigateGoBack={onNavigateGoBack}
          onClickNextBtn={onToggleCompleteCardRegister}
        />
      )}
    </FormProvider>
  )
}

export default AddEditCraditCard
