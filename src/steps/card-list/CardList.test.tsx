import { act } from '@testing-library/react';

import { useAddCardMachineActorRef } from 'src/machines/addCardMachine';
import { MOCK_CARD_INFO_LIST, mockCardListMachine } from 'src/mocks/card';
import { renderHookWithAddCardMachineProvider } from 'src/utils/render';

describe('카드 목록 테스트', () => {
	it('카드 삭제가 가능하다', () => {
		const { result } = renderHookWithAddCardMachineProvider(() => useAddCardMachineActorRef(), {
			providerLogic: mockCardListMachine,
		});

		act(() => {
			result.current.send({ type: 'DELETE_CARD', value: MOCK_CARD_INFO_LIST[0].id });
		});

		expect(result.current.getSnapshot().context.cardList.some(el => el.id === MOCK_CARD_INFO_LIST[0].id)).toBeFalsy();
	});
});
