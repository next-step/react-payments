import type { Meta, StoryObj } from '@storybook/react';

import ExpirationDateInputComponent from 'src/components/ExpirationDateInput.tsx';
import useExpirationDateInput from 'src/hooks/useExpirationDateInput.ts';

const meta: Meta<typeof ExpirationDateInputComponent> = {
	title: 'card/ExpirationDateInput',
	component: ExpirationDateInputComponent,
};

export default meta;

type Story = StoryObj<typeof ExpirationDateInputComponent>;

export const ExpirationDateInput: Story = {
	render: () => {
		const { handleExpirationDateChange, expirationDate } = useExpirationDateInput();

		return (
			<div>
				<ExpirationDateInputComponent
					onChange={handleExpirationDateChange}
					value={expirationDate}
					id="expiration-date"
				/>
			</div>
		);
	},
};
