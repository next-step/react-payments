import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardSecurityCodeInput from 'src/components/add-card-form/CardSecurityCodeInput.tsx';
import { SelectToFormLayer } from 'src/components/common/SelectToFormLayer.tsx';
import { renderWithAddCardMachineProvider } from 'src/utils/render.tsx';

const setup = () => {
	const utils = renderWithAddCardMachineProvider(
		<SelectToFormLayer>
			<CardSecurityCodeInput />
		</SelectToFormLayer>,
	);

	const cardSecurityCodeInput = screen.getByTestId<HTMLInputElement>('card-security-code');

	return {
		cardSecurityCodeInput,
		...utils,
	};
};

describe('카드 보안 코드 입력', () => {
	it('input 태그의 type이 password이다.', async () => {
		const { cardSecurityCodeInput } = setup();

		expect(cardSecurityCodeInput.type).toBe('password');
	});

	it('숫자 이외의 입력은 무시된다', async () => {
		const { cardSecurityCodeInput } = setup();

		await userEvent.type(cardSecurityCodeInput, 'aㅁ!1');

		expect(cardSecurityCodeInput.value).toBe('1');
	});
});
