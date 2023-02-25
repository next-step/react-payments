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
  const hasKey = action.payload.key in state;
  if (!hasKey)
    throw new Error(`${action.payload.key} is not a key of CardFieldReducer`);

  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case 'APPEND':
      return {
        ...state,
        [action.payload.key]: state[action.payload.key] + action.payload.value,
      };

    case 'DELETE':
      const fieldState = state[action.payload.key];
      if (typeof fieldState !== 'string') {
        throw new Error('state[action.payload.key] is not a string');
      }
      return {
        ...state,
        [action.payload.key]: fieldState.slice(0, -1),
      };
  }
};

export default cardFieldReducer;
