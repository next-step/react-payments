import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardForm from './CardForm'

export default {
  title: 'Components/CardForm',
  component: CardForm,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardForm>

const Template: ComponentStory<typeof CardForm> = () => {
  const { numbersRef, passwordRef, expiredDateRef, ownerRef, securityCodeRef } = useCardAdd()

  return (
    <CardForm>
      <CardForm.CardNumbers numbersRef={numbersRef} nextRef={expiredDateRef.first} />
      <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} />
      <CardForm.CardOwner ownerRef={ownerRef} />
      <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} nextRef={passwordRef.first} />
      <CardForm.CardPassword passwordRef={passwordRef} />
    </CardForm>
  )
}

export const Default = Template.bind({})
