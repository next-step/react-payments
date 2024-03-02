import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '.'

const meta = {
  title: 'Primitive/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'label',
  },
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export default meta
