import { Story, Meta } from '@storybook/react'

import CardDecorator from '@/decorator/CardDecorator'
import { CardExpiredDateProps } from '@/pages/CardAdd/components/CardForm/types'
import { useCardAdd } from '@/pages/CardAdd/hooks'

import CardExpiredDate from './CardExpiredDate'

export default {
  title: 'CardAdd/CardExpiredDate',
  component: CardExpiredDate,
  decorators: [CardDecorator],
} as Meta

const Template: Story<CardExpiredDateProps> = () => {
  const { expiredDateRef } = useCardAdd()
  return <CardExpiredDate expiredDateRef={expiredDateRef} />
}

export const Default = Template.bind({})
