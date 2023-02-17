import { CardField } from '@/types';

type CardFieldActionTypes = 'UPDATE' | 'APPEND' | 'DELETE';

export type CardFieldAction = {
  type: CardFieldActionTypes;
  payload: {
    key: keyof CardField;
    value: string;
  };
};

const cardFieldReducer = (state: CardField, action: CardFieldAction) => {
  const copyState = { ...state };

  const nonKey = !(action.payload.key in copyState);
  if (nonKey) throw new Error(`nonKey: ${action.payload.key}`);

  switch (action.type) {
    case 'UPDATE':
      copyState[action.payload.key] = action.payload.value;
      return copyState;
    case 'APPEND':
      copyState[action.payload.key] =
        copyState[action.payload.key] + action.payload.value;
      return copyState;

    case 'DELETE':
      copyState[action.payload.key] = copyState[action.payload.key].slice(
        0,
        -1
      );
      return copyState;
  }
};

export default cardFieldReducer;
