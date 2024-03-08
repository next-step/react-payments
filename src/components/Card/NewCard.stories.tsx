import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card.New> = {
  title: 'common/Card/New',
  component: Card.New
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
