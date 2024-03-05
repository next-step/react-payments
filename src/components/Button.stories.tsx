import type { Meta, StoryObj } from '@storybook/react'
import ButtonComponent from './Button.tsx'

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Button: Story = {
  args: {
    children: '확인',
  },
}
