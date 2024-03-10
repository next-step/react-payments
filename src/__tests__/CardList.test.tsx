import { act } from '@testing-library/react';
import { createMachine } from 'xstate';

import { addCardMachine, initialCardInfo, useAddCardMachineActorRef } from 'src/state/addCardMachine.ts';
import { MOCK_CARD_INFO_LIST } from 'src/mocks/card.ts';
import { renderHookWithAddCardMachineProvider } from 'src/utils/render.tsx';

describe('카드 목록 테스트', () => {
	it('카드 삭제가 가능하다', () => {
		const { result } = renderHookWithAddCardMachineProvider(() => useAddCardMachineActorRef(), {
			providerLogic: createMachine({
				...addCardMachine.config,
				context: {
					cardInfo: { ...initialCardInfo },
					cardList: [...MOCK_CARD_INFO_LIST],
					selectedCard: { ...initialCardInfo, id: '' },
				},
			}),
		});

		act(() => {
			result.current.send({ type: 'DELETE_CARD', value: MOCK_CARD_INFO_LIST[0].id });
		});

		expect(result.current.getSnapshot().context.cardList.some(el => el.id === MOCK_CARD_INFO_LIST[0].id)).toBeFalsy();
	});
});
