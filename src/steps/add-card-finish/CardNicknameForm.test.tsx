import { screen, act } from '@testing-library/react';

import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import CardNicknameForm from 'src/steps/add-card-finish/CardNicknameForm';
import { CARD_COMPANY_MAP } from 'src/constants/card';
import { mockCardListMachine, MOCK_CARD_INFO_LIST } from 'src/mocks/card';
import { renderWithAddCardMachineProvider, renderHookWithAddCardMachineProvider } from 'src/utils/render';

describe('카드 별칭 입력 테스트', () => {
	beforeEach(() => {
		renderWithAddCardMachineProvider(<CardNicknameForm />);
	});

	it('카드 별칭 입력 input의 placeholder는 "카드 별칭 (선택)" 이다.', () => {
		expect(screen.queryByPlaceholderText('카드 별칭 (선택)')).not.toBeNull();
	});

	it('카드 별칭 입력 input의 maxlength는 10이다.', () => {
		const nicknameInput = screen.getByTestId('nickname-input');

		expect(nicknameInput.getAttribute('maxlength')).toBe('10');
	});

	it('별칭을 입력하지 않고 확인 버튼을 누르면 카드사 이름이 별칭으로 저장된다.', () => {
		const { result } = renderHookWithAddCardMachineProvider(() => useAddCardMachineActorRef(), {
			providerLogic: mockCardListMachine,
		});

		const mockCardInfo = MOCK_CARD_INFO_LIST[0];

		act(() => {
			result.current.send({ type: 'SELECT_CARD', value: { ...mockCardInfo } });
		});

		act(() => {
			result.current.send({ type: 'CHANGE_FIELD', value: '', field: 'cardNickname' });
		});

		act(() => {
			result.current.send({ type: 'EDIT_CARD' });
		});

		const firstCardSnapshot = result.current.getSnapshot().context.cardList[0];

		expect(firstCardSnapshot.cardNickname).toBe(CARD_COMPANY_MAP[firstCardSnapshot.cardCompanyCode]?.name);
	});
});
