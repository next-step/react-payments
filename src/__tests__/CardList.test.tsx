import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';

import {
	addCardMachine,
	AddCardMachineProvider,
	initialCardInfo,
	useAddCardMachineActor,
} from 'src/state/addCardMachine.ts';
import { MOCK_CARD_INFO_LIST } from 'src/constants/card.ts';

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

describe('카드 목록 테스트', () => {
	it('카드 삭제가 가능하다', () => {
		const { result } = renderHook(() => useAddCardMachineActor(), {
			wrapper: MockCardListProvider,
		});

		act(() => {
			result.current[1]({ type: 'DELETE_CARD', value: MOCK_CARD_INFO_LIST[0].id });
		});

		expect(result.current[0].context.cardList.some(el => el.id === MOCK_CARD_INFO_LIST[0].id)).toBeFalsy();
	});
});
