import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'

const meta: Meta<typeof Card.Small> = {
  title: 'common/SmallCard',
  component: Card.Small
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    number: ['1234', '5678', '1234', '5678'],
    expiry: ['12', '22'],
    owner: 'sonny',
    name: 'sonny card'
  }
}
