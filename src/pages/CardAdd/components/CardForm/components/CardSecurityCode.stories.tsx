import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardSecurityCode from './CardSecurityCode'

export default {
  title: 'Components/CardForm/CardSecurityCode',
  component: CardSecurityCode,
  decorators: [CardDecorator],
  // 궁금한 점 : ComponentMeta vs Meta 차이점
} as ComponentMeta<typeof CardSecurityCode>

const Template: ComponentStory<typeof CardSecurityCode> = () => {
  const { passwordRef, securityCodeRef } = useCardAdd()
  return <CardSecurityCode securityCodeRef={securityCodeRef} nextRef={passwordRef.first} />
}

export const Default = Template.bind({})
