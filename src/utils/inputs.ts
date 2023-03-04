import { REGEX } from './../constants/regex'
import { CardType } from 'models/card.model'
import { HTMLInputTypeAttribute } from 'react'
import { getConvertDateFormat, getConvertAddStrFormat } from './formats'
import { CARD_INFO } from 'constants/card'

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
    key: CARD_INFO.CARD_NUMBER,
    formatter: (value: string) =>
      getConvertAddStrFormat(value, REGEX.NOT_NUMBER, {
        addIndexs: [4, 8, 12],
        addstr: '-',
      }),
    label: '카드번호',
    type: 'text',
    maxLength: 19,
    isRequire: true,
    width: '100%',
    placeholder: '',
  },
  {
    key: CARD_INFO.EXPIRE_DATE,
    formatter: (value: string) => getConvertDateFormat(value),
    label: '만료일',
    type: 'text',
    maxLength: 5,
    isRequire: true,
    width: '35%',
    placeholder: 'MM/YY',
  },
  {
    key: CARD_INFO.CARD_OWNER,
    formatter: (value: string) => getConvertAddStrFormat(value, REGEX.NOT_ENG),
    label: '카드소유자 이름(선택)',
    type: 'text',
    maxLength: 30,
    isRequire: false,
    width: '100%',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요',
    isMarkValueLength: true,
  },
  {
    key: CARD_INFO.PIN_CODE,
    formatter: (value: string) =>
      getConvertAddStrFormat(value, REGEX.NOT_NUMBER),
    label: '보안코드(CVC/CVV)',
    type: 'password',
    maxLength: 3,
    width: '25%',
    isRequire: true,
    placeholder: '',
  },
]

export default INPUTS
