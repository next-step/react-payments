import { Meta, StoryObj } from '@storybook/react';
import { CardExpiredDateInput } from '@pages/addCard/components';
import { useCardExpiredDateInput } from '@pages/addCard/hooks';

const meta = {
	title: 'PAGES/AddCard/CardExpiredDateInput',
	component: CardExpiredDateInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardExpiredDateInput>;

type Story = StoryObj<typeof CardExpiredDateInput>;

const TestCardExpiredDateInput = () => {
	const {
		displayedValue: displayedExpiredDate,
		handleChange: handleCardExpiredDateChange,
	} = useCardExpiredDateInput();

	return (
		<CardExpiredDateInput
			value={displayedExpiredDate}
			onChange={handleCardExpiredDateChange}
		/>
	);
};

export const Default: Story = {
	render: () => <TestCardExpiredDateInput />,
};

export default meta;
