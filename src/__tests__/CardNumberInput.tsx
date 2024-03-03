import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CardNumberInput from 'src/components/CardNumberInput.tsx';
import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';

export function TestContainer() {
	const cardNumberInput = useCardNumberInput();

	return (
		<div>
			<CardNumberInput {...cardNumberInput} />
		</div>
	);
}

const setup = () => {
	const utils = render(<TestContainer />);

	const firstInput = screen.getByTestId<HTMLInputElement>('first-segment');
	const secondInput = screen.getByTestId<HTMLInputElement>('second-segment');
	const thirdInput = screen.getByTestId<HTMLInputElement>('third-segment');
	const fourthInput = screen.getByTestId<HTMLInputElement>('fourth-segment');

	return {
		firstInput,
		secondInput,
		thirdInput,
		fourthInput,
		...utils,
	};
};

describe('카드 번호 입력', () => {
	it('세번째, 네번째 input의 type은 password이다.', () => {
		const { thirdInput, fourthInput } = setup();

		expect(thirdInput.type).toBe('password');
		expect(fourthInput.type).toBe('password');
	});

	it('각각의 input은 최대 4자리를 입력할 수 있다.', () => {
		const { firstInput, secondInput, thirdInput, fourthInput } = setup();

		const typeValue = '123456';

		fireEvent.change(firstInput, { target: { value: typeValue } });
		fireEvent.change(secondInput, { target: { value: typeValue } });
		fireEvent.change(thirdInput, { target: { value: typeValue } });
		fireEvent.change(fourthInput, { target: { value: typeValue } });

		expect(firstInput.value).toBe(typeValue.slice(0, 4));
		expect(secondInput.value).toBe(typeValue.slice(0, 4));
		expect(thirdInput.value).toBe(typeValue.slice(0, 4));
		expect(fourthInput.value).toBe(typeValue.slice(0, 4));
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

	it('첫번째 input에 4자리 입력 시, 두번째 input으로 포커스가 이동된다.', async () => {
		const { firstInput, secondInput } = setup();

		await userEvent.type(firstInput, '1234');

		expect(document.activeElement).toBe(secondInput);
	});

	it('두번째 input에 4자리 입력 시, 세번째 input으로 포커스가 이동된다.', async () => {
		const { secondInput, thirdInput } = setup();

		await userEvent.type(secondInput, '1234');

		expect(document.activeElement).toBe(thirdInput);
	});

	it('세번째 input에 4자리 입력 시, 네번째 input으로 포커스가 이동된다.', async () => {
		const { thirdInput, fourthInput } = setup();

		await userEvent.type(thirdInput, '1234');

		expect(document.activeElement).toBe(fourthInput);
	});
});
