import type { Meta, StoryObj } from '@storybook/react'

import { InputWithMask } from '.'

const meta = {
  title: 'Components/InputWithMask',
  component: InputWithMask,
  tags: ['autodocs'],
  args: {
    mask: '000 0000 0000',
    placeholder: '010 1111 2222',
  },
} satisfies Meta<typeof InputWithMask>

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const ExpirationDate: Story = {
  args: {
    mask: '00 / 00',
    placeholder: 'MM / YY',
  },
}

export default meta
