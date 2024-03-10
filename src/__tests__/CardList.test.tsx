import { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react';
import { createMachine } from 'xstate';

import {
	addCardMachine,
	AddCardMachineProvider,
	initialCardInfo,
	useAddCardMachineActorRef,
} from 'src/state/addCardMachine.ts';
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

describe('카드 목록 테스트', () => {
	it('카드 삭제가 가능하다', () => {
		const { result } = renderHook(() => useAddCardMachineActorRef(), {
			wrapper: MockCardListProvider,
		});

		act(() => {
			result.current.send({ type: 'DELETE_CARD', value: MOCK_CARD_INFO_LIST[0].id });
		});

		expect(result.current.getSnapshot().context.cardList.some(el => el.id === MOCK_CARD_INFO_LIST[0].id)).toBeFalsy();
	});
});
