import { getFormattedMonth, getOnlyNumber } from 'src/utils';

interface CardState {
  ownerName: string;
  expiration: {
    month: string;
    year: string;
  };
  securityCode: string;
  cardPassword: {
    first: string;
    second: string;
  };
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

export interface CardAction {
  type:
    | 'ownerName'
    | 'expirationMonth'
    | 'expirationYear'
    | 'securityCode'
    | 'cardPasswordFirst'
    | 'cardPasswordSecond'
    | 'cardNumberFirst'
    | 'cardNumberSecond'
    | 'cardNumberThird'
    | 'cardNumberFourth';
  param: string;
}

export const initialCard = {
  ownerName: '',
  expiration: {
    month: '',
    year: '',
  },
  securityCode: '',
  cardPassword: {
    first: '',
    second: '',
  },
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
};

export function cardReducer(state: CardState, action: CardAction) {
  const { type, param } = action;

  switch (type) {
    case 'ownerName':
      return {
        ...state,
        ownerName: param,
      };
    case 'securityCode':
      return {
        ...state,
        securityCode: getOnlyNumber(param),
      };
    case 'expirationMonth':
      return {
        ...state,
        expiration: {
          ...state.expiration,
          month: getFormattedMonth(getOnlyNumber(param)),
        },
      };
    case 'expirationYear':
      return {
        ...state,
        expiration: {
          ...state.expiration,
          year: getOnlyNumber(param),
        },
      };
    case 'cardPasswordFirst':
      return {
        ...state,
        cardPassword: {
          ...state.cardPassword,
          first: getOnlyNumber(param),
        },
      };
    case 'cardPasswordSecond':
      return {
        ...state,
        cardPassword: {
          ...state.cardPassword,
          second: getOnlyNumber(param),
        },
      };
    case 'cardNumberFirst':
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          first: getOnlyNumber(param),
        },
      };
    case 'cardNumberSecond':
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          second: getOnlyNumber(param),
        },
      };
    case 'cardNumberThird':
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          third: getOnlyNumber(param),
        },
      };
    case 'cardNumberFourth':
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          fourth: getOnlyNumber(param),
        },
      };
    default:
      throw Error('Unknown action');
  }
}
