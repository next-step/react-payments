import { CardType } from 'models/card.model'
import { HTMLInputTypeAttribute } from 'react'
import {
  cardNumberFormat,
  cardOwnerFormat,
  expireDateFormat,
  onlyNumberFormat,
} from './formats'

type InputType = {
  key: keyof Omit<CardType, 'id'>
  formatter: (value: string) => string
  label: string
  type: HTMLInputTypeAttribute
  maxLength: number
  isRequire?: boolean
  width?: string
  placeholder?: string
  isMarkValueLength?: boolean
}

const INPUTS: InputType[] = [
  {
    key: 'cardNumber',
    formatter: (value: string) => cardNumberFormat(value),
    label: '카드번호',
    type: 'text',
    maxLength: 19,
    isRequire: true,
    width: '100%',
    placeholder: '',
  },
  {
    key: 'expireDate',
    formatter: (value: string) => expireDateFormat(value),
    label: '만료일',
    type: 'text',
    maxLength: 5,
    isRequire: true,
    width: '35%',
    placeholder: 'MM/YY',
  },
  {
    key: 'cardOwner',
    formatter: (value: string) => cardOwnerFormat(value),
    label: '카드소유자 이름(선택)',
    type: 'text',
    maxLength: 30,
    isRequire: false,
    width: '100%',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요',
    isMarkValueLength: true,
  },
  {
    key: 'pinCode',
    formatter: (value: string) => onlyNumberFormat(value),
    label: '보안코드(CVC/CVV)',
    type: 'password',
    maxLength: 3,
    width: '25%',
    isRequire: true,
    placeholder: '',
  },
  {
    key: 'password',
    formatter: (value: string) => onlyNumberFormat(value),
    label: '카드비밀번호',
    type: 'password',
    maxLength: 1,
    width: '15%',
    isRequire: true,
    placeholder: '',
  },
]

export default INPUTS
