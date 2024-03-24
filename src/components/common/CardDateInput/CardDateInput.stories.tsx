import type { Meta, StoryObj } from '@storybook/react'
import { CardDateInput } from './index'
import { ChangeEventHandler, useState } from 'react'

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

export const Basic: Story = {
  render: () => {
    const [expiry, setExpiry] = useState(['12', '22'])

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const { name, value: newValue } = e.target
      const [, index] = name.split('.')

      setExpiry(
        expiry.map((value, idx) => (idx === Number(index) ? newValue : value))
      )
    }

    return (
      <CardDateInput
        name="card-expiry"
        values={expiry}
        onChange={handleChange}
      />
    )
  }
}
