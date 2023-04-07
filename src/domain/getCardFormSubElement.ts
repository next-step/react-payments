import { ReactNode, Children, isValidElement } from 'react'

import {
  CardNumbers,
  CardExpiredDate,
  CardOwner,
  CardSecurityCode,
  CardPassword,
} from '@/pages/CardAdd/components/CardForm/components'

type CardSubElementType =
  | typeof CardNumbers
  | typeof CardExpiredDate
  | typeof CardOwner
  | typeof CardSecurityCode
  | typeof CardPassword

const getCardFormSubElement = (children: ReactNode, type: CardSubElementType) => {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === type).slice(0, 2)
}

export default getCardFormSubElement
