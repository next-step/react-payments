import type { Meta, StoryObj } from '@storybook/react';

import CardSecurityCodeInputComponent from 'src/components/add-card-form/CardSecurityCodeInput.tsx';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer.tsx';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

const meta: Meta<typeof CardSecurityCodeInputComponent> = {
	title: 'card/CardSecurityCodeInput',
	component: CardSecurityCodeInputComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof CardSecurityCodeInputComponent>;

export const CardSecurityCodeInput: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<CardSecurityCodeInputComponent />
			</SelectToFormLayer>
		);
	},
};
