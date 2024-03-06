import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useCardExpirationDateInput from 'src/hooks/useCardExpirationDateInput.ts';
import CardExpirationDateInput from 'src/components/CardExpirationDateInput.tsx';

export function TestContainer() {
	const { handleExpirationDateChange, expirationDate, id } = useCardExpirationDateInput();

	return (
		<CardExpirationDateInput
			expirationDate={expirationDate}
			handleExpirationDateChange={handleExpirationDateChange}
			id={id}
		/>
	);
}

const setup = () => {
	const utils = render(<TestContainer />);

	const expirationDateInput = screen.getByTestId<HTMLInputElement>('card-expiration-date');

	return {
		expirationDateInput,
		...utils,
	};
};

describe('만료일 입력', () => {
	it('placeholder 가 MM / YY 로 표시된다', () => {
		const { expirationDateInput } = setup();

		expect(expirationDateInput.placeholder).toBe('MM / YY');
	});

	it('월, 년 사이에 자동으로 / 가 삽입된다', async () => {
		const { expirationDateInput } = setup();

		await userEvent.type(expirationDateInput, '123');

		expect(expirationDateInput.value).toBe('12 / 3');
	});

	it('월은 1이상 12이하 숫자(01~12)여야 한다. 월에서 벗어난 숫자 입력 시, 입력이 무시된다.', async () => {
		const { expirationDateInput } = setup();

		await userEvent.type(expirationDateInput, '13');

		expect(expirationDateInput.value).toBe('1');
	});

	it('년은 0이상 99이하 숫자여야 한다. 년에서 벗어난 숫자 입력 시, 입력이 무시된다.', async () => {
		const { expirationDateInput } = setup();

		await userEvent.type(expirationDateInput, '12109');

		expect(expirationDateInput.value).toBe('12 / 10');
	});

	it('숫자 이외의 입력은 무시된다', async () => {
		const { expirationDateInput } = setup();

		await userEvent.type(expirationDateInput, 'aㅁ!1');

		expect(expirationDateInput.value).toBe('1');
	});
});
