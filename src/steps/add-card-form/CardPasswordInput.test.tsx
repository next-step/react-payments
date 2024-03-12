import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardPasswordInput from 'src/steps/add-card-form/CardPasswordInput.tsx';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer.tsx';
import { renderWithAddCardMachineProvider } from 'src/utils/render.tsx';

const setup = () => {
	const firstInput = screen.getByTestId<HTMLInputElement>('first-password');
	const secondInput = screen.getByTestId<HTMLInputElement>('second-password');

	return {
		firstInput,
		secondInput,
	};
};

describe('카드 비밀번호 입력', () => {
	beforeEach(() => {
		renderWithAddCardMachineProvider(
			<SelectToFormLayer>
				<CardPasswordInput />
			</SelectToFormLayer>,
		);
	});

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
