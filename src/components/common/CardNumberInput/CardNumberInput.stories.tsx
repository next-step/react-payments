import type { Meta, StoryObj } from '@storybook/react'
import { CardNumberInput } from './index'
import { ChangeEventHandler, useState } from 'react'

const meta: Meta<typeof CardNumberInput> = {
  title: 'common/CardNumberInput',
  component: CardNumberInput
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const [numbers, setNumbers] = useState(['', '', '', ''])

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const { name, value: newValue } = e.target
      const [, index] = name.split('.')

      setNumbers(
        numbers.map((value, idx) => (idx === Number(index) ? newValue : value))
      )
    }

    return (
      <CardNumberInput
        name="card-number"
        values={numbers}
        onChange={handleChange}
      />
    )
  }
}
