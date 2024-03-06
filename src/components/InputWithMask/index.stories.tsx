import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

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

export const MaskingTest: Story = {
  args: {
    role: 'text',
    mask: '00 00 00',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const maskInput = canvas.getByRole('text')

    await userEvent.type(canvas.getByRole('text'), '11')
    await expect(maskInput).toHaveValue('11')

    await userEvent.type(maskInput, '1')
    await expect(maskInput).toHaveValue('11 1') // error
  },
}
