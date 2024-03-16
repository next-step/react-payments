import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerNameInputComponent from 'src/steps/add-card-form/CardOwnerNameInput';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer';
import { AddCardMachineDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof CardOwnerNameInputComponent> = {
	title: 'card/CardOwnerNameInput',
	component: CardOwnerNameInputComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof CardOwnerNameInputComponent>;

export const CardOwnerNameInput: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<CardOwnerNameInputComponent />
			</SelectToFormLayer>
		);
	},
};
