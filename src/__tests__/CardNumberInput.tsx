import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardNumberInput from 'src/components/CardNumberInput.tsx';
import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';

export function TestContainer() {
	const { handleCardNumberChange, cardNumber, maxLength } = useCardNumberInput();

	return (
		<CardNumberInput
			value={cardNumber}
			onChange={handleCardNumberChange}
			maxLength={maxLength}
			id="card-number"
			aria-label="card-number"
		/>
	);
}

const setup = () => {
	const utils = render(<TestContainer />);

	const cardNumberInput = screen.getByLabelText<HTMLInputElement>('card-number', { selector: 'input' });

	return {
		cardNumberInput,
		...utils,
	};
};

describe('카드 번호 입력', () => {
	it('숫자 이외의 입력은 무시된다', async () => {
		const { cardNumberInput } = setup();

		await userEvent.type(cardNumberInput, 'aㅁ!1');

		expect(cardNumberInput.value).toBe('1');
	});

	it('4자리 마다 -가 삽입된다', async () => {
		const { cardNumberInput } = setup();

		await userEvent.type(cardNumberInput, '1234567890123456');

		expect(cardNumberInput.value).toBe('1234-5678-9012-3456');
	});

	it('16자리보다 많이 입력해도 16자리면 입력된다.', async () => {
		const { cardNumberInput } = setup();

		await userEvent.type(cardNumberInput, '12345678901234567');

		expect(cardNumberInput.value).toBe('1234-5678-9012-3456');
	});

	it('backspace 입력 시 -가 자동으로 삭제된다.', async () => {
		const { cardNumberInput } = setup();

		await userEvent.type(cardNumberInput, '123456');

		await userEvent.pointer({ target: cardNumberInput, node: cardNumberInput, keys: '[MouseLeft]' });

		await userEvent.keyboard('{Backspace}{Backspace}');

		expect(cardNumberInput.value).toBe('1234');
	});
});
