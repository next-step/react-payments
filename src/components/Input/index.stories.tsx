import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'

import { Input } from '.'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const WithText: Story = {
  args: {
    value: '텍스트 입니다.',
  },
}

export const PlaceHolder: Story = {
  args: {
    placeholder: 'placeholder 입니다.',
  },
}

export const ClickTest: Story = {
  args: {
    role: 'text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('text'))

    await expect(canvas.getByRole('text')).toHaveFocus()
  },
}

export default meta
