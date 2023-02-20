import React, { ChangeEvent } from 'react'
import { Header } from 'components/molecules/Header'
import { AiOutlineLeft } from 'react-icons/ai'
import { CardType, CardTypeKeys, OnChangeEventParams } from 'models/card.model'
import { Card } from 'components/atoms/Card'
import { UI_SIZE } from 'constants/ui.constant'
import INPUTS from 'utils/inputs'
import './RegisterCard.css'
import { FormGroup } from 'components/molecules/FromGroup'

type RegisterCardProps = {
  card: CardType
  onNavigate: () => void
  changeValue: (value: string, name: CardTypeKeys) => void
}

const RegisterCard: React.FC<RegisterCardProps> = ({
  card,
  onNavigate,
  changeValue,
}) => {
  const onChange = (
    e: ChangeEvent,
    { formatter, name }: OnChangeEventParams,
  ) => {
    const { value } = e.target as HTMLInputElement

    const currentvalue = formatter ? formatter(value) : value

    changeValue(currentvalue, name)
  }

  const onMultipleValue = (e: ChangeEvent, i: number) => {
    //const value = value splice 기능 사용해서 추가추가 해서 업데이트하기
    // changeValue({
    //   ...params,
    //   value: currentvalue,
    // })
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
      <Card card={card} size={UI_SIZE.SMALL} />
      <div className='card-form'>{inputLayout}</div>
    </>
  )
}

export default RegisterCard
