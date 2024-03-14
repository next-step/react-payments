import '@/../styles/card.css'

import { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  title: 'features/payments/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export default meta

export const Basic: Story = {
  args: {},
  render: () => (
    <Card backgroundColor="orange">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Card.CardCompany name="Master" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Card.CardChip />
        </div>

        <div>
          <Card.CarNumber creditCardNumber="1234 5678 9012 3456" revealCount={4} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card.CardExpirationDate expirationDate="12/25" />
          <Card.CardHolderName name="John Doe" />
        </div>
      </div>
    </Card>
  ),
}
