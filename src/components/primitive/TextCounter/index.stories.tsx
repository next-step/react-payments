import type { Meta, StoryObj } from '@storybook/react'

import { TextCounter } from '.'

const meta = {
  title: 'Primitive/TextCounter',
  component: TextCounter,
  tags: ['autodocs'],
  args: {
    currentLength: 0,
    maxLength: 10,
    gap: 0,
  },
} satisfies Meta<typeof TextCounter>

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export default meta
