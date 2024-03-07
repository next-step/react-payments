import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddCardStepper from 'src/components/AddCardStepper.tsx';

const setup = () => {
	const formNextButton = screen.getByTestId('form-next');
	const backToSelectButton = screen.getByTestId('back-to-select');

	return {
		formNextButton,
		backToSelectButton,
	};
};

describe('카드 추가 step 테스트', () => {
	describe('카드 선택 step', () => {
		beforeEach(async () => {
			render(<AddCardStepper />);
		});

		it('카드 추가 버튼을 누르면 카드 입력 form과 카드회사 모달이 노출된다.', async () => {
			const addCardButton = screen.getByTestId('add-card-button');

			await userEvent.click(addCardButton);

			expect(screen.queryByTestId('card-form')).not.toBeNull();

			expect(screen.queryByTestId('company-modal')).not.toBeNull();
		});
	});

	describe('카드 추가 form step', () => {
		beforeEach(async () => {
			render(<AddCardStepper />);

			const addCardButton = screen.getByTestId('add-card-button');

			await userEvent.click(addCardButton);
		});

		it('다음 버튼을 누르면 nickname 입력 form이 노출된다.', async () => {
			const { formNextButton } = setup();

			await userEvent.click(formNextButton);

			expect(screen.queryByTestId('nickname')).not.toBeNull();
		});

		it('뒤로가기 버튼을 누르면 카드 선택 화면으로 돌아간다.', async () => {
			const { backToSelectButton } = setup();

			await userEvent.click(backToSelectButton);

			expect(screen.queryByTestId('card-select')).not.toBeNull();
		});
	});
});
