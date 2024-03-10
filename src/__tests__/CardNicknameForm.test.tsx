import { ReactNode } from 'react';
import { render, screen, renderHook, act } from '@testing-library/react';

import {
	AddCardMachineProvider,
	useAddCardMachineActor,
	addCardMachine,
	initialCardInfo,
} from 'src/state/addCardMachine.ts';
import CardNicknameForm from 'src/components/CardNicknameForm.tsx';
import { getCardCompanyNameByCode } from 'src/constants/card.ts';
import { MOCK_CARD_INFO_LIST } from 'src/mocks/card.ts';

function MockCardListProvider({ children }: { children?: ReactNode }) {
	return (
		<AddCardMachineProvider
			machine={addCardMachine.withContext({
				cardInfo: { ...initialCardInfo },
				cardList: [...MOCK_CARD_INFO_LIST],
				selectedCard: { ...initialCardInfo, id: '' },
			})}
		>
			{children}
		</AddCardMachineProvider>
	);
}

const setup = () => {
	const { result } = renderHook(() => useAddCardMachineActor(), {
		wrapper: MockCardListProvider,
	});

	render(<CardNicknameForm />, { wrapper: MockCardListProvider });

	const nicknameInput = screen.getByTestId('nickname-input');

	return {
		...result,
		nicknameInput,
	};
};

describe('카드 별칭 입력 테스트', () => {
	it('카드 별칭 입력 input의 placeholder는 "카드 별칭 (선택)" 이다.', () => {
		setup();

		expect(screen.queryByPlaceholderText('카드 별칭 (선택)')).not.toBeNull();
	});

	it('카드 별칭 입력 input의 maxlength는 10이다.', () => {
		const { nicknameInput } = setup();

		expect(nicknameInput.getAttribute('maxlength')).toBe('10');
	});

	it('별칭을 입력하지 않고 확인 버튼을 누르면 카드사 이름이 별칭으로 저장된다.', () => {
		const [state, send] = setup().current;

		const mockCardInfo = MOCK_CARD_INFO_LIST[0];

		act(() => {
			send({ type: 'SELECT_CARD', value: { ...mockCardInfo } });
		});

		console.log(state.value, 'nickname form');

		act(() => {
			send({ type: 'CHANGE_FIELD', value: '', field: 'cardNickname' });
		});

		act(() => {
			send({ type: 'EDIT_CARD' });
		});

		expect(state.context.cardList[0].cardNickname).toBe(
			getCardCompanyNameByCode(state.context.cardList[0].cardCompanyCode),
		);
	});
});
