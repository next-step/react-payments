import React, { ChangeEvent } from 'react'
import { Header } from 'components/molecules/Header'
import { AiOutlineLeft } from 'react-icons/ai'
import { CardType, CardTypeKeys, OnChangeEventParams } from 'models/card.model'
import { Card } from 'components/atoms/Card'
import { UI_SIZE, UI_VARIANT } from 'constants/ui.constant'
import INPUTS from 'utils/inputs'
import './RegisterCard.css'
import { FormGroup } from 'components/molecules/FromGroup'
import { PasswordFormGroup } from 'components/molecules/PasswordFormGroup'
import { Button } from 'components/atoms/Button'

type RegisterCardProps = {
  card: CardType
  onNavigate: () => void
  changeValue: (value: string, name: CardTypeKeys) => void
  isCompleteRegister: boolean
  onClickNextBtn: () => void
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  card,
  onNavigate,
  changeValue,
  isCompleteRegister,
  onClickNextBtn,
}) => {
  const onChange = (
    e: ChangeEvent,
    { formatter, name }: OnChangeEventParams,
  ) => {
    const { value } = e.target as HTMLInputElement

    const currentvalue = formatter ? formatter(value) : value
    changeValue(currentvalue, name)
  }

  const onChangePassword = (value: string, name: CardTypeKeys) => {
    changeValue(value, name)
  }

  const inputLayout = INPUTS.map(
    ({
      key,
      label,
      type,
      maxLength,
      isRequire = false,
      width,
      placeholder,
      formatter,
      isMarkValueLength,
    }) => (
      <FormGroup
        key={key}
        label={label}
        name={key}
        value={card[key]}
        type={type}
        maxLength={maxLength}
        isRequire={isRequire}
        isMarkValueLength={isMarkValueLength}
        onChange={(e: ChangeEvent) => onChange(e, { name: key, formatter })}
        width={width}
        placeholder={placeholder}
      />
    ),
  )
  return (
    <>
      <Header
        title='카드 추가'
        icon={<AiOutlineLeft />}
        onClickIcon={onNavigate}
      />
      <Card card={card} size={UI_SIZE.SMALL} isShowNickname={false} />
      <div className='card-form'>
        {inputLayout}
        <PasswordFormGroup onChange={onChangePassword}></PasswordFormGroup>
      </div>
      {isCompleteRegister && (
        <div className='button-box'>
          <Button
            size={UI_SIZE.MEDIUM}
            variant={UI_VARIANT.GHOST}
            color='green'
            onClick={onClickNextBtn}
          >
            다음
          </Button>
        </div>
      )}
    </>
  )
}

export default RegisterCard
