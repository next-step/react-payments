import { Meta, StoryObj } from '@storybook/react';
import { CardSecurityCodeInput } from '@pages/addCard/components';
import { useInput } from '@hooks';
import { isNumber } from '@utils';

const meta = {
	title: 'AddCard/CardSecurityCodeInput',
	component: CardSecurityCodeInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityCodeInput>;

type Story = StoryObj<typeof CardSecurityCodeInput>;

const TestCardSecurityCodeInput = () => {
	const {
		value: cardSecurityCode,
		handleChange: handleCardSecurityCodeChange,
	} = useInput({ validate: isNumber });
	return (
		<CardSecurityCodeInput
			value={cardSecurityCode}
			onChange={handleCardSecurityCodeChange}
		/>
	);
};

export const Default: Story = {
	render: () => <TestCardSecurityCodeInput />,
};

export default meta;
