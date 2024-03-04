import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardSecurityCodeInput from 'src/components/CardSecurityCodeInput.tsx';
import useCardSecurityCodeInput from 'src/hooks/useCardSecurityCodeInput.ts';

export function TestContainer() {
	const { handleCardSecurityCodeChange, cardSecurityCode } = useCardSecurityCodeInput();

	return (
		<CardSecurityCodeInput
			value={cardSecurityCode}
			onChange={handleCardSecurityCodeChange}
			id="card-security-code"
			aria-label="card-security-code"
		/>
	);
}

const setup = () => {
	const utils = render(<TestContainer />);

	const cardSecurityCodeInput = screen.getByLabelText<HTMLInputElement>('card-security-code', { selector: 'input' });

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
