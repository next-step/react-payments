import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'

const meta: Meta<typeof Card.New> = {
  title: 'common/NewCard',
  component: Card.New
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
