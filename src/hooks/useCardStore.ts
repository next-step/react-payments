import { useMemo, useContext } from 'react';
//
import { CardStateContext, CardDispatchContext } from '@/contexts';
//
import type { CardState, SecureCardState } from 'literal';

export const useCardState = () => {
  const context = useContext(CardStateContext);
  if (!context) {
    throw new Error('useCardState는 반드시 CardProvider에서 사용해주세요.');
  }
  return context;
};

export const useCardDispatch = () => {
  const context = useContext(CardDispatchContext);
  if (!context) {
    throw new Error('useCardDispatch는 반드시 CardProvider에서 사용해주세요.');
  }
  return context;
};

export const useCardStore = () => {
  const state = useCardState();
  const dispatch = useCardDispatch();

  return useMemo(
    () => ({
      getCardList: () => {
        return state;
      },
      getCurrentCard: () => {
        return state.at(-1) as CardState;
      },
      addCard: (card: CardState) => {
        dispatch({ type: 'ADD_CARD', card });
      },
      editCard: (card: SecureCardState) => {
        dispatch({ type: 'EDIT_CARD', card });
      },
      delCard: (card: SecureCardState) => {
        dispatch({ type: 'DEL_CARD', card });
      },
    }),
    [state, dispatch],
  );
};
