import { ReactNode } from 'react';

import { AddCardMachineProvider } from 'src/machines/addCardMachine.ts';

export const AddCardMachineDecorator = (Story: () => ReactNode) => {
	return (
		<AddCardMachineProvider>
			<Story />
		</AddCardMachineProvider>
	);
};
