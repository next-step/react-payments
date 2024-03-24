import type { Meta, StoryObj } from '@storybook/react';

import CardSecurityCodeInputComponent from 'src/steps/add-card-form/CardSecurityCodeInput';
import { SelectToFormLayer } from 'src/components/utils/Wrapper';
import { AddCardMachineDecorator, AutoFocusWithSelectToFormDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof CardSecurityCodeInputComponent> = {
	title: 'card/CardSecurityCodeInput',
	component: CardSecurityCodeInputComponent,
	decorators: [AutoFocusWithSelectToFormDecorator, AddCardMachineDecorator],
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
