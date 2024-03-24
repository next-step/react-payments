import type { Meta, StoryObj } from '@storybook/react'
import { MaxLengthNumberInput } from './index'
import { ChangeEvent, useState } from 'react'

const meta: Meta<typeof MaxLengthNumberInput> = {
  title: 'common/MaxLengthNumberInput',
  component: MaxLengthNumberInput,
  args: {
    width: '100%'
  },
  argTypes: {
    width: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  args: {
    width: '40%',
    maxLength: 3
  },
  render: args => {
    const [value, setValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }

    return (
      <MaxLengthNumberInput value={value} onChange={handleChange} {...args} />
    )
  }
}

export const UnControlled: Story = {
  args: {
    maxLength: 3
  }
}
