import React, { useReducer, useState } from 'react'
import useCardItem from 'hooks/useCardItem'
import {
  AddPaymentCard,
  AddPaymentCardKeys,
  CardCompanyCodeType,
  CardType,
  CardTypeKeys,
  PaymentCard,
} from 'models/card.model'
import { RegisterCard } from 'organisms/RegisterCard'
import { CompleteRegisterCard } from 'organisms/CompleteRegisterCard'
import { CardCompanyList } from 'components/molecules/CardCompanyList'
import { INIT_CARD_VALUE } from 'constants/card'
import { Modal } from 'components/atoms/Modal'
import './AddEditCraditCard.css'
import { FormProvider } from 'context/FormContext'
import { CardFormReducer } from 'reducers/CardFormReducer'
import { INITAL_CARD_STATE } from 'constants/cardValidateState'

type AddEditCraditCardProps = {
  onNavigateNext: () => void
  // addCard: (card: PaymentCard) => void
  initCardValue?: PaymentCard | AddPaymentCard
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigateNext,
  // addCard,
  initCardValue = INIT_CARD_VALUE,
}) => {
  // const { card, resetCard, updateCard, validator } = useCardItem(initCardValue)
  const [isComplete, setIsComplete] = useState(false)
  const [state, dispatch] = useReducer(CardFormReducer, INITAL_CARD_STATE)

  const handleChange = (payload: {
    error: any
    innerKey: any
    key: any
    newValue: any
  }) => {
    dispatch({
      type: 'updateForm',
      payload,
    })

    // {
    //   newValue,
    //   error,
    //   key: name,
    //   innerKey: innerKey ?? '',
    // }
  }

  // const completeCardRegistor = () => {
  //   addCard(card)
  //   onNavigate()
  //   resetCard()
  // }

  // const changeValue = (value: string, name: CardTypeKeys) => {
  //   updateCard(value, name)
  // }

  // const changeCardCompanyValue = (value: CardCompanyCodeType) => {
  //   updateCard(value, 'cardCompanyCode')
  // }

  const onNavigateNextStep = () => {
    setIsComplete(true)
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
    </FormProvider>
    // <RegisterCard
    //   card={card}
    //   onNavigate={onNavigate}
    //   onClickNextBtn={onNavigateNextStep}
    //   changeValue={changeValue}
    //   isCompleteRegister={isCompleteRegister}
    // />
    // <main id='add-card-container'>
    //   {isComplete ? (
    //     <CompleteRegisterCard
    //       card={card}
    //       changeValue={changeValue}
    //       submit={completeCardRegistor}
    //     />
    //   ) : (
    //     <RegisterCard
    //       card={card}
    //       onNavigate={onNavigate}
    //       onClickNextBtn={onNavigateNextStep}
    //       changeValue={changeValue}
    //       isCompleteRegister={isCompleteRegister}
    //     />
    //   )}

    //   <Modal isOpen={validator.cardNumber && !validator.cardCompanyCode}>
    //     <CardCompanyList onClick={changeCardCompanyValue} />
    //   </Modal>
    // </main>
  )
}

export default AddEditCraditCard
