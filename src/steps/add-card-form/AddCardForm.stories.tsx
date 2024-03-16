import type { Meta, StoryObj } from '@storybook/react';

import AddCardFormComponent from 'src/steps/add-card-form/AddCardForm';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer';
import { AddCardMachineDecorator } from 'src/stories/Decorators';

const meta: Meta<typeof AddCardFormComponent> = {
	title: 'card/AddCardForm',
	component: AddCardFormComponent,
	decorators: [AddCardMachineDecorator],
};

export default meta;

type Story = StoryObj<typeof AddCardFormComponent>;

export const AddCardForm: Story = {
	render: () => {
		return (
			<SelectToFormLayer>
				<AddCardFormComponent />
			</SelectToFormLayer>
		);
	},
};
