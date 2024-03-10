import { ReactNode } from 'react';
import { createMachine } from 'xstate';
import { render, screen, renderHook, act } from '@testing-library/react';

import {
	AddCardMachineProvider,
	addCardMachine,
	initialCardInfo,
	useAddCardMachineActorRef,
} from 'src/state/addCardMachine.ts';
import CardNicknameForm from 'src/components/CardNicknameForm.tsx';
import { CARD_COMPANY_MAP } from 'src/constants/card.ts';
import { MOCK_CARD_INFO_LIST } from 'src/mocks/card.ts';

function MockCardListProvider({ children }: { children?: ReactNode }) {
	return (
		<AddCardMachineProvider
			logic={createMachine({
				...addCardMachine.config,
				context: {
					cardInfo: { ...initialCardInfo },
					cardList: [...MOCK_CARD_INFO_LIST],
					selectedCard: { ...initialCardInfo, id: '' },
				},
			})}
		>
			{children}
		</AddCardMachineProvider>
	);
}

describe('카드 별칭 입력 테스트', () => {
	beforeEach(() => {
		render(<CardNicknameForm />, { wrapper: MockCardListProvider });
	});

	it('카드 별칭 입력 input의 placeholder는 "카드 별칭 (선택)" 이다.', () => {
		expect(screen.queryByPlaceholderText('카드 별칭 (선택)')).not.toBeNull();
	});

	it('카드 별칭 입력 input의 maxlength는 10이다.', () => {
		const nicknameInput = screen.getByTestId('nickname-input');

		expect(nicknameInput.getAttribute('maxlength')).toBe('10');
	});

	it('별칭을 입력하지 않고 확인 버튼을 누르면 카드사 이름이 별칭으로 저장된다.', () => {
		const { result } = renderHook(() => useAddCardMachineActorRef(), {
			wrapper: MockCardListProvider,
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
