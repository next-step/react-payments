import type { Meta, StoryObj } from '@storybook/react';

import CardOwnerNameInputComponent from 'src/components/add-card-form/CardOwnerNameInput.tsx';
import { SelectToFormLayer } from 'src/components/common/SelectToFormLayer.tsx';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

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
