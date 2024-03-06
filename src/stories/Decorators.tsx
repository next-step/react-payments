import { ReactNode } from 'react';

import { AddCardMachineProvider } from 'src/state/addCardMachine.ts';

export const AddCardMachineDecorator = (Story: () => ReactNode) => {
	return (
		<AddCardMachineProvider>
			<Story />
		</AddCardMachineProvider>
	);
};
