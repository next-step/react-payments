import type { Meta, StoryObj } from '@storybook/react';

import CardExpirationDateInputComponent from 'src/components/CardExpirationDateInput.tsx';
import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput.ts';

const meta: Meta<typeof CardExpirationDateInputComponent> = {
	title: 'card/CardExpirationDateInput',
	component: CardExpirationDateInputComponent,
};

export default meta;

type Story = StoryObj<typeof CardExpirationDateInputComponent>;

export const CardExpirationDateInput: Story = {
	render: () => {
		const { handleExpirationDateChange, expirationDate } = useCardExpirationDateInput();

		return (
			<div>
				<CardExpirationDateInputComponent
					onChange={handleExpirationDateChange}
					value={expirationDate}
					id="expiration-date"
				/>
			</div>
		);
	},
};
