import type { Meta, StoryObj } from '@storybook/react'
import { CardDateInput } from './CardDateInput'
import { useState } from 'react'

const meta: Meta<typeof CardDateInput> = {
  title: 'common/CardDateInput',
  component: CardDateInput,
  args: {
    width: '50%'
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
      'card_date-month': '12',
      'card_date-year': '22'
    })

    return (
      <CardDateInput value={inputValues} onChange={setInputValues} {...args} />
    )
  }
}

export const UnControlled: Story = {}
