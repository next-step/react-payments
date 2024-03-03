import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardPasswordInput from 'src/components/CardPasswordInput.tsx';
import useCardPasswordInput from 'src/hooks/useCardPasswordInput.ts';

export function TestContainer() {
	const { first, handleFirstChange, second, handleSecondChange, secondRef } = useCardPasswordInput();

	return (
		<CardPasswordInput
			first={first}
			onFirstChange={handleFirstChange}
			second={second}
			onSecondChange={handleSecondChange}
			secondRef={secondRef}
		/>
	);
}

const setup = () => {
	const utils = render(<TestContainer />);

	const firstInput = screen.getByLabelText<HTMLInputElement>('first-password', { selector: 'input' });
	const secondInput = screen.getByLabelText<HTMLInputElement>('second-password', { selector: 'input' });

	return {
		firstInput,
		secondInput,
		...utils,
	};
};

describe('카드 비밀번호 입력', () => {
	it('첫 번째 input의 type은 password이다.', () => {
		const { firstInput } = setup();

		expect(firstInput.type).toBe('password');
	});

	it('두 번째 input의 type은 password이다.', () => {
		const { secondInput } = setup();

		expect(secondInput.type).toBe('password');
	});

	it('숫자 이외의 입력은 무시된다', async () => {
		const { firstInput, secondInput } = setup();

		await userEvent.type(firstInput, 'aㅁ!1');
		await userEvent.type(secondInput, 'aㅁ!1');

		expect(firstInput.value).toBe('1');
		expect(secondInput.value).toBe('1');
	});

	it('첫 번째 input에 1자리 숫자 입력 시, 두 번째 input으로 포커스가 이동된다.', async () => {
		const { firstInput, secondInput } = setup();

		await userEvent.type(firstInput, '1');

		expect(document.activeElement).toBe(secondInput);
	});

	it('두 번째 input에 2자리 이상 입력 시, 두 번째 input의 값이 2자리로 제한된다.', async () => {
		const { secondInput } = setup();

		await userEvent.type(secondInput, '123');

		expect(secondInput.value).toBe('1');
	});
});
