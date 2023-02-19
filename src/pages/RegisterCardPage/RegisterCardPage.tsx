import React, { ChangeEvent } from 'react'
import { Header } from 'components/ui/Header'
import { AiOutlineLeft } from 'react-icons/ai'
import { CardType } from 'models/card.model'
import { Card } from 'components/Card'
import { UI_SIZE } from 'constants/ui.constant'
import INPUTS from 'utils/inputs'
import './RegisterCardPage.css'
import { FormGroup } from 'components/FromGroup'

type RegisterCardPageProps = {
  card: CardType
  onNavigate: () => void
  changeValue: (e: ChangeEvent, key: keyof CardType) => void
}

const RegisterCardPage: React.FC<RegisterCardPageProps> = ({ card, onNavigate, changeValue }) => {
  const inputLayout = INPUTS.map(
    ({ key, label, type, maxLength, isRequire, width, placeholder }) => (
      <FormGroup
        key={key}
        label={label}
        name={key}
        value={card[key]}
        type={type}
        maxLength={maxLength}
        isRequire={isRequire}
        onChange={changeValue}
        width={width}
        placeholder={placeholder}
      />
    ),
  )
  return (
    <>
      <Header title='카드 추가' icon={<AiOutlineLeft />} onClickIcon={onNavigate} />
      <Card card={card} size={UI_SIZE.SMALL} />
      <div className='card-form'>{inputLayout}</div>
    </>
  )
}

export default RegisterCardPage
