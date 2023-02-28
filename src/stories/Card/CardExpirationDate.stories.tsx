import type { ComponentStory, Meta } from '@storybook/react'

import { CardExpirationDate } from '../../components/Card'

export default {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
} as Meta

const Template: ComponentStory<typeof CardExpirationDate> = (args) => <CardExpirationDate {...args} />

const cardExpirationDate = {
  MM: '02',
  YY: '23',
}

export const Default = Template.bind({})
Default.args = {
  cardExpirationDate,
}
