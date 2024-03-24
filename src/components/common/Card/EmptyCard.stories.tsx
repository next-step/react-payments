import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'

const meta: Meta<typeof Card.Empty> = {
  title: 'common/EmptyCard',
  component: Card.Empty
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
