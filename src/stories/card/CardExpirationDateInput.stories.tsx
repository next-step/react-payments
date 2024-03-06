import type { Meta, StoryObj } from '@storybook/react';

import CardExpirationDateInputComponent from 'src/components/CardExpirationDateInput.tsx';
import { SelectToFormLayer } from 'src/components/SelectToFormLayer.tsx';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

const meta: Meta<typeof CardExpirationDateInputComponent> = {
	title: 'card/CardExpirationDateInput',
	component: CardExpirationDateInputComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof CardExpirationDateInputComponent>;

export const CardExpirationDateInput: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<CardExpirationDateInputComponent />
			</SelectToFormLayer>
		);
	},
};
