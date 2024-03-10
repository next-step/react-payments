import type { Meta, StoryObj } from '@storybook/react'
import { CardNumberInput } from './index'
import { useState } from 'react'

const meta: Meta<typeof CardNumberInput> = {
  title: 'common/CardNumberInput',
  component: CardNumberInput,
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
  render: args => {
    const [inputValues, setInputValues] = useState({
      'card_number-1': '1232',
      'card_number-2': '3412',
      'card_number-3': '1232',
      'card_number-4': '1232'
    })

    return (
      <CardNumberInput
        value={inputValues}
        onChange={setInputValues}
        {...args}
      />
    )
  }
}

export const UnControlled: Story = {}
