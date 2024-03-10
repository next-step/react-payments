import { Meta, StoryObj } from '@storybook/react'
import { CardPinInput } from '@/components/template/card-pin-input'
import { layoutArgTypes } from '@/stories/arg-types.ts'
import { userEvent } from '@storybook/testing-library'

const meta: Meta<typeof CardPinInput> = {
  title: 'template/CardPinInput',
  component: CardPinInput,
  tags: ['autodocs'],
  argTypes: {
    ...layoutArgTypes,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <CardPinInput {...args} />,
  args: {
    id: 'card-pin',
    label: '비밀번호',
  },
  play: async ({ step }) => {
    const cardPinInput = document.getElementById('card-pin-0')!

    await step('Enter non number string', async () => {
      await userEvent.type(cardPinInput, 'a')
    })

    await step('Enter one digit', async () => {
      await userEvent.type(cardPinInput, '1')
    })

    await step('Enter second digit', async () => {
      await userEvent.keyboard('2')
    })
  },
}
