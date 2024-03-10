import { ReactNode } from 'react';
import { render, renderHook, RenderOptions, RenderHookOptions } from '@testing-library/react';
import { AddCardMachineProvider, addCardMachine } from 'src/state/addCardMachine.ts';

interface RenderWithAddCardMachineProviderOptions {
	renderOptions?: RenderOptions;
	providerLogic?: typeof addCardMachine;
}

interface RenderHookWithAddCardMachineProviderOptions<Props> {
	renderHookOptions?: RenderHookOptions<Props>;
	providerLogic?: typeof addCardMachine;
}

export function renderWithAddCardMachineProvider(ui: ReactNode, options?: RenderWithAddCardMachineProviderOptions) {
	return render(
		<AddCardMachineProvider logic={options?.providerLogic}>{ui}</AddCardMachineProvider>,
		options?.renderOptions,
	);
}

export function renderHookWithAddCardMachineProvider<Result, Props>(
	callback: (initialProps: Props) => Result,
	options?: RenderHookWithAddCardMachineProviderOptions<Props>,
) {
	return renderHook(callback, {
		wrapper: ({ children }) => AddCardMachineProvider({ children, logic: options?.providerLogic }),
		...options?.renderHookOptions,
	});
}
