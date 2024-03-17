import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'text',
    primary: true,
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    type: 'text',
    primary: true,
    size: 'small',
  },
}

export const XSmall: Story = {
  args: {
    type: 'text',
    primary: true,
    size: 'xsmall',
  },
}
