import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardNumberInput from 'src/components/add-card-form/CardNumberInput.tsx';
import { SelectToFormLayer } from 'src/components/utils/SelectToFormLayer.tsx';
import { renderWithAddCardMachineProvider } from 'src/utils/render.tsx';

const setup = () => {
	const firstInput = screen.getByTestId<HTMLInputElement>('first-segment');
	const secondInput = screen.getByTestId<HTMLInputElement>('second-segment');
	const thirdInput = screen.getByTestId<HTMLInputElement>('third-segment');
	const fourthInput = screen.getByTestId<HTMLInputElement>('fourth-segment');

	return {
		firstInput,
		secondInput,
		thirdInput,
		fourthInput,
	};
};

describe('카드 번호 입력', () => {
	beforeEach(() => {
		renderWithAddCardMachineProvider(
			<SelectToFormLayer>
				<CardNumberInput />
			</SelectToFormLayer>,
		);
	});

	it('세번째, 네번째 input의 type은 password이다.', () => {
		const { thirdInput, fourthInput } = setup();

		expect(thirdInput.type).toBe('password');
		expect(fourthInput.type).toBe('password');
	});

	it('숫자 이외의 입력은 무시된다', async () => {
		const { firstInput, secondInput, thirdInput, fourthInput } = setup();

		await userEvent.type(firstInput, 'aㅁ!1');
		await userEvent.type(secondInput, 'aㅁ!1');
		await userEvent.type(thirdInput, 'aㅁ!1');
		await userEvent.type(fourthInput, 'aㅁ!1');

		expect(firstInput.value).toBe('1');
		expect(secondInput.value).toBe('1');
		expect(thirdInput.value).toBe('1');
		expect(fourthInput.value).toBe('1');
	});

	it('첫번째 input에 4자리 이상 입력 시, 두번째 input으로 포커스가 이동된다.', async () => {
		const { firstInput, secondInput } = setup();

		await userEvent.type(firstInput, '12345');

		expect(document.activeElement).toBe(secondInput);
	});

	it('두번째 input에 4자리 이상 입력 시, 세번째 input으로 포커스가 이동된다.', async () => {
		const { secondInput, thirdInput } = setup();

		await userEvent.type(secondInput, '12345');

		expect(document.activeElement).toBe(thirdInput);
	});

	it('세번째 input에 4자리 이상 입력 시, 네번째 input으로 포커스가 이동된다.', async () => {
		const { thirdInput, fourthInput } = setup();

		await userEvent.type(thirdInput, '12345');

		expect(document.activeElement).toBe(fourthInput);
	});
});
