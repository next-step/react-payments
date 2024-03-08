import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card.Empty> = {
  title: 'common/Card/Empty',
  component: Card.Empty
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
