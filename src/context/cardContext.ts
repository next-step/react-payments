import { createContext, Dispatch, Ref, SetStateAction } from 'react';
import { INIT_CARD_STATE } from '@/constants/index';
import { initCardState } from '@components/Card/index';

interface CardContextType {
  cardState: initCardState;
  setCardState: Dispatch<SetStateAction<initCardState>>;
  cardList: initCardState[];
  setCardList: Dispatch<SetStateAction<initCardState[]>>;
}
export const CardContext = createContext<CardContextType>({
  cardState: { ...INIT_CARD_STATE },
  setCardState: () => null,
  cardList: [],
  setCardList: () => null,
});
