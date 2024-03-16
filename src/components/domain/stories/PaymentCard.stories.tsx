import { Meta, StoryObj } from '@storybook/react';
import { PaymentCard } from '@components/domain';

const meta = {
	title: 'DOMAIN/PaymentCard',
	component: PaymentCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PaymentCard>;

type Story = StoryObj<typeof PaymentCard>;

export const SmallCard: Story = {
	render: () => (
		<PaymentCard
			variant="small-card"
			cardNumber="1234-5678-1234-5678"
			cardExpiredDate="12/26"
			cardHolderName="이파란"
		/>
	),
};

export default meta;
