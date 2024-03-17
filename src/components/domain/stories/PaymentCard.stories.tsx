import { PaymentCard } from '@components/domain';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'COMMON/DOMAIN/PaymentCard',
	component: PaymentCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: { options: ['small-card', 'big-card'] },
	},
	args: {
		variant: 'small-card',
		cardNumber: '1234567812345678',
		cardExpiredDate: '1224',
		cardHolderName: '하하하',
	},
} satisfies Meta<typeof PaymentCard>;

type Story = StoryObj<typeof PaymentCard>;

export const Basic: Story = {
	args: {
		variant: 'small-card',
		cardNumber: '1234567812345678',
		cardExpiredDate: '1224',
		cardHolderName: '하하하',
	},
};

export default meta;
