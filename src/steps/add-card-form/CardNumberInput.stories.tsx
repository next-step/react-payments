import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInputComponent from 'src/steps/add-card-form/CardNumberInput';
import { SelectToFormLayer } from 'src/components/utils/Wrapper';
import { AddCardMachineDecorator, AutoFocusWithSelectToFormDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof CardNumberInputComponent> = {
	title: 'card/CardNumberInput',
	component: CardNumberInputComponent,
	decorators: [AutoFocusWithSelectToFormDecorator, AddCardMachineDecorator],
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
