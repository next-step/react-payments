import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddCardStepper from 'src/steps/AddCardStepper.tsx';
import { useAddCardMachineActorRef } from 'src/machines/addCardMachine.ts';
import { MOCK_CARD_INFO_LIST } from 'src/mocks/card.ts';
import { renderWithAddCardMachineProvider, renderHookWithAddCardMachineProvider } from 'src/utils/render.tsx';
import { mockCardInfoMachine } from 'src/mocks/card.ts';

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
		beforeEach(() => {
			renderWithAddCardMachineProvider(<AddCardStepper />, { providerLogic: mockCardInfoMachine });
		});

		it('카드 추가 버튼을 누르면 카드 입력 form과 카드회사 모달이 노출된다.', async () => {
			const addCardButton = screen.getByTestId('add-card-button');

			await userEvent.click(addCardButton);

			expect(screen.queryByTestId('card-form')).not.toBeNull();

			expect(screen.queryByTestId('company-modal')).not.toBeNull();
		});

		it('카드를 클릭하면, 카드 추가 확인 화면으로 이동한다.', async () => {
			const { result } = renderHookWithAddCardMachineProvider(() => useAddCardMachineActorRef());

			act(() => {
				result.current.send({ type: 'SELECT_CARD', value: MOCK_CARD_INFO_LIST[0] });
			});

			expect(result.current.getSnapshot().matches('AddCardFinish')).toBe(true);
		});
	});

	describe('카드 추가 form step', () => {
		beforeEach(async () => {
			renderWithAddCardMachineProvider(<AddCardStepper />, { providerLogic: mockCardInfoMachine });

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

	describe('카드 추가 확인 step', () => {
		it('확인 버튼을 누르면 카드 선택 화면으로 이동한다.', async () => {
			renderWithAddCardMachineProvider(<AddCardStepper />, { providerLogic: mockCardInfoMachine });

			const addCardButton = screen.getByTestId('add-card-button');

			await userEvent.click(addCardButton);

			const { formNextButton } = setup();

			await userEvent.click(formNextButton);

			const confirmButton = screen.getByTestId('confirm');

			await userEvent.click(confirmButton);

			expect(screen.queryByTestId('card-select')).not.toBeNull();
		});
	});
});
