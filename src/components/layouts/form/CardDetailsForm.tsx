import { PropsWithChildren } from 'react'

import { NavigationButton as NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { CardAliasInput, InputContainer } from '@/components/input'
import { PageTitle } from '@/components/layouts'
import { getCardDetailsFormSubElement } from '@/domain'

const CardDetailsForm = ({ children }: PropsWithChildren) => {
  const bigCard = getCardDetailsFormSubElement(children, BigCard)
  const pageTitle = getCardDetailsFormSubElement(children, PageTitle)
  const NavigationButton = getCardDetailsFormSubElement(children, NavigationTextButton)
  const cardAliasInput = getCardDetailsFormSubElement(children, CardAliasInput)
  return (
    <div className="app flex-column-center">
      <div className="flex-center">{pageTitle}</div>
      {bigCard}
      <InputContainer addtionalClassName="flex-center w-100">{cardAliasInput}</InputContainer>
      {NavigationButton}
    </div>
  )
}

CardDetailsForm.PageTitle = PageTitle
CardDetailsForm.BigCard = BigCard
CardDetailsForm.NavigationButton = NavigationTextButton
CardDetailsForm.CardAliasInput = CardAliasInput

export default CardDetailsForm
