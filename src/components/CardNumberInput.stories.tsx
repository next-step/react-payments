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

const CARD_ONE_SECTION_NUMBER_LENGTH = 4
export const CardNumber: Story = {
  args: {
    divider: '-',
    inputs: [
      {
        type: 'text',
        maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
        value: '2345',
        onChange,
      },
      {
        type: 'text',
        maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
        value: '1234',
        onChange,
      },
      {
        type: 'password',
        maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
        value: '',
        onChange,
      },
      {
        type: 'password',
        maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
        value: '',
        onChange,
      },
    ],
  },
}
