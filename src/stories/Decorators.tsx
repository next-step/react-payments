import { ReactNode } from 'react';

import { AddCardMachineProvider } from 'src/machines/addCardMachine';

export const AddCardMachineDecorator = (Story: () => ReactNode) => {
	return (
		<AddCardMachineProvider>
			<Story />
		</AddCardMachineProvider>
	);
};
