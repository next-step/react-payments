import type { ComponentStory, Meta } from '@storybook/react'

import { CardPassword } from '../../components/Card'

export default {
  title: 'CardPassword',
  component: CardPassword,
} as Meta

const Template: ComponentStory<typeof CardPassword> = (args) => <CardPassword {...args} />

const cardPassword = {
  num1: '1',
  num2: '2',
  num3: '*',
  num4: '*',
}

export const Default = Template.bind({})
Default.args = {
  cardPassword,
}
