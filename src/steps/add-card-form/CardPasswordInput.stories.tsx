import type { Meta, StoryObj } from '@storybook/react';

import CardPasswordInputComponent from 'src/steps/add-card-form/CardPasswordInput';
import { SelectToFormLayer } from 'src/components/utils/Wrapper';
import { AddCardMachineDecorator, AutoFocusWithSelectToFormDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof CardPasswordInputComponent> = {
	title: 'card/CardPasswordInput',
	component: CardPasswordInputComponent,
	decorators: [AutoFocusWithSelectToFormDecorator, AddCardMachineDecorator],
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
