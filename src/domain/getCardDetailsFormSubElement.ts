import { ReactNode, Children, isValidElement } from 'react'

import { NavigationButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { CardAliasInput } from '@/components/input'
import { PageTitle } from '@/components/layouts'

type CardSubElementType = typeof PageTitle | typeof BigCard | typeof NavigationButton | typeof CardAliasInput

const getCardDetailsFormSubElement = (children: ReactNode, type: CardSubElementType) => {
  const childrenArray = Children.toArray(children)
  return childrenArray.filter((child) => isValidElement(child) && child.type === type).slice(0, 2)
}

export default getCardDetailsFormSubElement
