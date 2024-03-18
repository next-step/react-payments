import { PaymentCardLabel } from '@components/domain';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'COMMON/DOMAIN/PaymentCardLabel',
	component: PaymentCardLabel,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		label: '호호카드',
	},
} satisfies Meta<typeof PaymentCardLabel>;

type Story = StoryObj<typeof PaymentCardLabel>;

export const Basic: Story = {
	args: {
		label: '호호카드',
	},
};

export default meta;
