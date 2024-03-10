import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './index'

const meta: Meta<typeof Input> = {
  title: 'common/Input',
  component: Input,
  argTypes: {
    theme: {
      control: 'radio',
      options: ['basic', 'underline']
    },
    type: {
      control: 'radio',
      options: ['number', 'password', 'text']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    theme: 'basic',
    type: 'text',
    width: '300px'
  }
}
export const Underline: Story = {
  args: {
    theme: 'underline',
    type: 'text'
  }
}
