import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerNameInputComponent from 'src/components/CardOwnerNameInput.tsx';
import useCardOwnerNameInput from 'src/hooks/useCardOwnerNameInput.ts';

const meta: Meta<typeof CardOwnerNameInputComponent> = {
	title: 'card/CardOwnerNameInput',
	component: CardOwnerNameInputComponent,
};

export default meta;

type Story = StoryObj<typeof CardOwnerNameInputComponent>;

export const CardOwnerNameInput: Story = {
	render: () => {
		const { handleCardOwnerNameChange, cardOwnerName, maxLength } = useCardOwnerNameInput();

		return (
			<div>
				<CardOwnerNameInputComponent
					value={cardOwnerName}
					onChange={handleCardOwnerNameChange}
					maxLength={maxLength}
					id="card-owner-name"
				/>
			</div>
		);
	},
};
