import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta = {
  title: 'Primitive/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export default meta
