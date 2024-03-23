import type { Meta, StoryObj } from '@storybook/react'
import { CardPasswordInput } from './index'
import { ChangeEventHandler, useState } from 'react'

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

export const Basic: Story = {
  render: () => {
    const [passwords, setPasswords] = useState(['', '', '', ''])

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
      const { name, value: newValue } = e.target
      const [, index] = name.split('.')

      setPasswords(
        passwords.map((value, idx) =>
          idx === Number(index) ? newValue : value
        )
      )
    }

    return (
      <CardPasswordInput
        name="card-password"
        values={passwords}
        onChange={handleChange}
      />
    )
  }
}
