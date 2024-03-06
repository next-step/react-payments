import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInputComponent from 'src/components/CardNumberInput.tsx';
import { SelectToFormLayer } from 'src/components/SelectToFormLayer.tsx';
import { AddCardMachineDecorator } from 'src/stories/Decorators.tsx';

const meta: Meta<typeof CardNumberInputComponent> = {
	title: 'card/CardNumberInput',
	component: CardNumberInputComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof CardNumberInputComponent>;

export const CardNumberInput: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<CardNumberInputComponent />
			</SelectToFormLayer>
		);
	},
};
