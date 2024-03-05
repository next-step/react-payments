import type { Meta, StoryObj } from '@storybook/react'
import InputComponent from './Input.tsx'

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
}

export default meta

type Story = StoryObj<typeof InputComponent>

export const Primary: Story = {
  args: {},
}

export const Password: Story = {
  args: {
    type: 'password',
  },
}

export const SizeMd: Story = {
  args: {
    size: 'md',
  },
}
