import type { Meta, StoryObj } from '@storybook/react'
import CardNumberComponent from './CardNumberInput.tsx'

const meta: Meta<typeof CardNumberComponent> = {
  component: CardNumberComponent,
}

export default meta

type Story = StoryObj<typeof CardNumberComponent>

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

export const CardNumber: Story = {
  args: {
    one: '',
    two: '',
    three: '',
    four: '',
    onChangeOne: onChange,
    onChangeTwo: onChange,
    onChangeThree: onChange,
    onChangeFour: onChange,
  },
}
