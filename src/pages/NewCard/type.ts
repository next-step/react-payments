import { INIT_CARD_STATE } from '@/constants/index';

export type newStateProps = {
  [k in keyof typeof INIT_CARD_STATE]: typeof INIT_CARD_STATE[k];
};
export type changeCardStateType = (
  newState: newStateProps,
  v?: typeof INIT_CARD_STATE[keyof typeof INIT_CARD_STATE],
  key?: keyof typeof INIT_CARD_STATE
) => void;
