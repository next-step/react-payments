import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CardDecorator } from '@/decorator'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardOwner from './CardOwner'

export default {
  title: 'Components/CardForm/CardOwner',
  component: CardOwner,
  decorators: [CardDecorator],
} as ComponentMeta<typeof CardOwner>

const Template: ComponentStory<typeof CardOwner> = (props) => {
  const { ownerRef } = useCardAdd()
  return <CardOwner {...props} ownerRef={ownerRef} />
}

export const Default = Template.bind({})
