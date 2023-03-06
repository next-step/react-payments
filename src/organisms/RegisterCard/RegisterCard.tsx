import React, { ChangeEvent, useContext, useState } from 'react'
import { Header } from 'components/molecules/Header'
import { AiOutlineLeft } from 'react-icons/ai'
import {
  CardType,
  CardTypeKeys,
  OnChangeEventParams,
  PaymentCard,
} from 'models/card.model'
import { Card } from 'components/atoms/Card'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'
import INPUTS from 'utils/inputs'
import './RegisterCard.css'
import { FormGroup } from 'components/molecules/FormGroup'
import { PasswordFormGroup } from 'components/molecules/PasswordFormGroup'
import { Button } from 'components/atoms/Button'
import RegisterCardForm from 'organisms/RegisterCardForm/RegisterCardForm'
import { INIT_CARD_VALUE } from 'constants/card'
import { useFormContext } from 'context/FormContext'

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
  // const onChange = (
  //   e: ChangeEvent,
  //   { formatter, name }: OnChangeEventParams,
  // ) => {
  //   const { value } = e.target as HTMLInputElement

  //   const currentvalue = formatter ? formatter(value) : value
  //   changeValue(currentvalue, name)
  // }

  // const onChangePassword = (value: string, name: CardTypeKeys) => {
  //   changeValue(value, name)
  // }

  //const [card, setCard] = useState(INIT_CARD_VALUE)

  // const onChangeCardInfo = (name: CardTypeKeys, value: string) => {
  //   setCard((prevCardInfo) => ({
  //     ...prevCardInfo,
  //     [name]: value,
  //   }))

  //   // name의 isValid가 true면
  //   // value가 valid면, auto focusing
  // }

  const { state, handleChange } = useFormContext()

  return (
    <>
      <Header
        title='카드 추가'
        icon={<AiOutlineLeft />}
        onClickIcon={onNavigate}
      />
      {/* <Card card={state} size={UI_SIZE.SMALL} isShowNickname={false} /> */}
      <div className='card-form'></div>
    </>
  )
}

export default RegisterCard
