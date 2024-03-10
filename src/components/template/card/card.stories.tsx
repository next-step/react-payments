import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types'
import { Card } from './card'

const meta: Meta<typeof Card> = {
  title: 'template/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Card {...args} />,
  args: {
    cardCode: '',
    cardName: '',
    cardExpDate: '',
  },
}
