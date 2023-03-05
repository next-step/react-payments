import { ReactNode, Children, isValidElement } from 'react'

import { CardAliasInput, NavigationTextButton, BigCard, PageTitle } from '@/components'

type CardSubElementType = typeof PageTitle | typeof BigCard | typeof NavigationTextButton | typeof CardAliasInput

const getCardDetailsFormSubElement = (children: ReactNode, type: CardSubElementType) => {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === type).slice(0, 2)
}

export default getCardDetailsFormSubElement
