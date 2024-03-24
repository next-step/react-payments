import { ReactNode } from 'react';

import { AddCardMachineProvider } from 'src/machines/addCardMachine';
import { SelectToFormLayer, AutoFocusWrapperWithSelectToForm } from 'src/components/utils/Wrapper';

export const AddCardMachineDecorator = (Story: () => ReactNode) => {
	return (
		<AddCardMachineProvider>
			<Story />
		</AddCardMachineProvider>
	);
};

export const SelectToFormDecorator = (Story: () => ReactNode) => {
	return (
		<SelectToFormLayer>
			<Story />
		</SelectToFormLayer>
	);
};

export const AutoFocusWithSelectToFormDecorator = (Story: () => ReactNode) => {
	return (
		<AutoFocusWrapperWithSelectToForm>
			<Story />
		</AutoFocusWrapperWithSelectToForm>
	);
};
