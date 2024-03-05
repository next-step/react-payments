import type { Meta, StoryObj } from '@storybook/react'
import DateInputComponent from './DateInput.tsx'

const meta: Meta<typeof DateInputComponent> = {
  component: DateInputComponent,
}

export default meta

type Story = StoryObj<typeof DateInputComponent>

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
}

export const DateInput: Story = {
  args: {
    expiredMonth: '',
    expiredYear: '',
    onChangeMonth: onChange,
    onChangeYear: onChange,
  },
}
