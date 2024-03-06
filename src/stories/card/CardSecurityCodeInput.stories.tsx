import type { Meta, StoryObj } from '@storybook/react';

import CardSecurityCodeInputComponent from 'src/components/CardSecurityCodeInput.tsx';
import useCardSecurityCodeInput from 'src/hooks/useCardSecurityCodeInput.ts';

const meta: Meta<typeof CardSecurityCodeInputComponent> = {
	title: 'card/CardSecurityCodeInput',
	component: CardSecurityCodeInputComponent,
};

export default meta;

type Story = StoryObj<typeof CardSecurityCodeInputComponent>;

export const CardSecurityCodeInput: Story = {
	render: () => {
		const { handleCardSecurityCodeChange, cardSecurityCode } = useCardSecurityCodeInput();

		return (
			<div>
				<CardSecurityCodeInputComponent
					value={cardSecurityCode}
					onChange={handleCardSecurityCodeChange}
					id="card-security-code"
				/>
			</div>
		);
	},
};
