import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardPassword from './CardPassword'

export default {
  title: 'Components/CardForm/CardPassword',
  component: CardPassword,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardPassword>

const Template: ComponentStory<typeof CardPassword> = () => {
  const { passwordRef } = useCardAdd()
  return <CardPassword passwordRef={passwordRef} />
}

export const Default = Template.bind({})
