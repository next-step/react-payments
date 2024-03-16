import type { Meta, StoryObj } from '@storybook/react';

import CardExpirationDateInputComponent from 'src/steps/add-card-form/CardExpirationDateInput';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer';
import { AddCardMachineDecorator } from 'src/stories/Decorators';

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
