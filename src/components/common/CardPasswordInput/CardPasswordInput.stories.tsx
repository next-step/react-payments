import type { Meta, StoryObj } from '@storybook/react'
import { CardPasswordInput } from './index'
import { useState } from 'react'

const meta: Meta<typeof CardPasswordInput> = {
  title: 'common/CardPasswordInput',
  component: CardPasswordInput,
  argTypes: {
    inputWidth: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  render: args => {
    const [inputValues, setInputValues] = useState({
      'card_password-1': '1',
      'card_password-2': '3',
      'card_password-3': '1',
      'card_password-4': '1'
    })

    return (
      <CardPasswordInput
        value={inputValues}
        onChange={setInputValues}
        {...args}
      />
    )
  }
}

export const UnControlled: Story = {}
