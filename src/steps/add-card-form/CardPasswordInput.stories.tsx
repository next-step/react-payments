import type { Meta, StoryObj } from '@storybook/react';

import CardPasswordInputComponent from 'src/steps/add-card-form/CardPasswordInput.tsx';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer.tsx';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

const meta: Meta<typeof CardPasswordInputComponent> = {
	title: 'card/CardPasswordInput',
	component: CardPasswordInputComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof CardPasswordInputComponent>;

export const CardPasswordInput: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<CardPasswordInputComponent />
			</SelectToFormLayer>
		);
	},
};
