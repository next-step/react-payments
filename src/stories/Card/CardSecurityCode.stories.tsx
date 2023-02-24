import type { ComponentStory, Meta } from '@storybook/react'

import { CardSecurityCode } from '../../components/Card'

export default {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
} as Meta

const Template: ComponentStory<typeof CardSecurityCode> = (args) => <CardSecurityCode {...args} />

const cardSecurityCode = {
  num1: '023',
  num2: '',
  num3: '',
  num4: '',
}

export const Default = Template.bind({})
Default.args = {
  cardSecurityCode,
}
