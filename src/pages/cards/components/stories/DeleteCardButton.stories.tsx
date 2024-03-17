import { DeleteCardButton } from '@pages/cards/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'PAGES/Cards/DeleteCardButton',
	component: DeleteCardButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DeleteCardButton>;

type Story = StoryObj<typeof DeleteCardButton>;

const TestDeleteCardButton = () => {
	const handleClick = () => {
		console.log('handle Click');
	};
	return <DeleteCardButton onClick={handleClick} />;
};

export const Default: Story = {
	render: () => <TestDeleteCardButton />,
};

export default meta;
