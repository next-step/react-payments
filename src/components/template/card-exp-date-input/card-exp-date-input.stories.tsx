import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types'
import { CardExpDateInput } from './card-exp-date-input'
import { userEvent, within } from '@storybook/testing-library'

const meta: Meta<typeof CardExpDateInput> = {
  title: 'template/CardExpDateInput',
  component: CardExpDateInput,
  tags: ['autodocs'],
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <CardExpDateInput {...args} />,
  args: {
    id: 'exp-date-input',
    label: '날짜 입력',
    width: '180px',
  },
  play: async ({ step, canvasElement }) => {
    const canvas = within(canvasElement)

    const monthInput = canvas.getByPlaceholderText('MM')
    const yearInput = canvas.getByPlaceholderText('YY')

    await step('Enter non number string', async () => {
      await userEvent.type(monthInput, 'asdafasdaa')
    })
    await step('Enter 2-digit on monthInput', async () => {
      await userEvent.type(monthInput, '12')
    })
    await step('Enter 2-digit on yearInput', async () => {
      await userEvent.type(yearInput, '12')
    })
  },
}
