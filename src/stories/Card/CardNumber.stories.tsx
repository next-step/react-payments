import type { ComponentStory, Meta } from '@storybook/react'

import { CardNumber } from '../../components/Card'

export default {
  title: 'CardNumber',
  component: CardNumber,
} as Meta

const Template: ComponentStory<typeof CardNumber> = (args) => <CardNumber {...args} />

const cardNumberData = {
  num1: '0232',
  num2: '2143',
  num3: '1555',
  num4: '8225',
}

export const Default = Template.bind({})
Default.args = {
  cardNumberData,
}
