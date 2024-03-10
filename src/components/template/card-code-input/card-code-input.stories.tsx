import { Meta, StoryObj } from '@storybook/react'
import { layoutArgTypes } from '@/stories/arg-types'
import { CardCodeInput } from './card-code-input'
import { within, userEvent } from '@storybook/testing-library'

const meta: Meta<typeof CardCodeInput> = {
  title: 'template/CardCodeInput',
  component: CardCodeInput,
  tags: ['autodocs'],
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <CardCodeInput {...args} />,
  args: {
    id: 'card-number',
    label: '카드 번호',
    placeholder: 'XXXX - XXXX - XXXX - XXXX',
    defaultValue: '',
  },
  play: async ({ step, canvasElement }) => {
    const canvas = within(canvasElement)

    const cardCodeInput = canvas.getByLabelText('카드 번호')

    await step('Enter non number string', async () => {
      await userEvent.type(cardCodeInput, 'asdafasdaa')
    })
    await step('Enter 8-digit number', async () => {
      await userEvent.type(cardCodeInput, '12345678')
    })

    await step('Enter additional 8-digit number', async () => {
      await userEvent.type(cardCodeInput, '87654321')
    })

    await step('Delete 4 digits', async () => {
      await userEvent.type(cardCodeInput, '{backspace}{backspace}{backspace}{backspace}')
    })

    await step('Delete all digits', async () => {
      await userEvent.type(
        cardCodeInput,
        '{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}',
      )
    })
  },
}
