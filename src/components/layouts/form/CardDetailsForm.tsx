import { PropsWithChildren } from 'react'

import { NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { CardAliasInput, InputContainer } from '@/components/input'
import { PageTitle } from '@/components/layouts'
import { getCardDetailsFormSubElement } from '@/domain'

const CardDetailsForm = ({ children }: PropsWithChildren) => {
  const bigCard = getCardDetailsFormSubElement(children, BigCard)
  const pageTitle = getCardDetailsFormSubElement(children, PageTitle)
  const navigationTextButton = getCardDetailsFormSubElement(children, NavigationTextButton)
  const cardAliasInput = getCardDetailsFormSubElement(children, CardAliasInput)
  return (
    <div className="app flex-column-center">
      <div className="flex-center">{pageTitle}</div>
      {bigCard}
      <InputContainer addtionalClassName="flex-center w-100">{cardAliasInput}</InputContainer>
      {navigationTextButton}
    </div>
  )
}

CardDetailsForm.PageTitle = PageTitle
CardDetailsForm.BigCard = BigCard
CardDetailsForm.NavigationTextButton = NavigationTextButton
CardDetailsForm.CardAliasInput = CardAliasInput

export default CardDetailsForm
