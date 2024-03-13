import { keepOnlyAlphabetHangulAndSpace, keepOnlyNumeric } from '@/utils/regex';
import { CardFormState } from './CardFormContext';

export enum REDUCER_ACTION_TYPE {
  UPDATE_CARD_NUMBER = 'UPDATE_CARD_NUMBER',
  UPDATE_EXPIRATION_MONTH = 'UPDATE_EXPIRATION_MONTH',
  UPDATE_EXPIRATION_YEAR = 'UPDATE_EXPIRATION_YEAR',
  UPDATE_OWNER_NAME = 'UPDATE_OWNER_NAME',
  UPDATE_VERIFICATION_CODE = 'UPDATE_VERIFICATION_CODE',
  UPDATE_CARD_PASSWORD = 'UPDATE_CARD_PASSWORD',
  UPDATE_CARD_COMPANY = 'UPDATE_CARD_COMPANY',
  UPDATE_CARD_NICKNAME = 'UPDATE_CARD_NICKNAME',
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: CardFormState, action: ReducerAction) => {
  const clonedState = structuredClone(state);

  switch (action.type) {
    case REDUCER_ACTION_TYPE.UPDATE_CARD_NUMBER: {
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, cardNumber: '' } };
      let replacedText = keepOnlyNumeric(action.payload);
      // 카드 번호 4자리마다 -가 삽입된다.
      replacedText = replacedText.replace(/(\d{4})/g, '$1-');
      // 마지막이 "-"이면 제거한다.
      replacedText = replacedText.endsWith('-') ? replacedText.slice(0, -1) : replacedText;
      return { ...clonedState, fields: { ...clonedState.fields, cardNumber: replacedText } };
    }
    case REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_MONTH:
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, expirationMonth: '' } };
      return { ...clonedState, fields: { ...clonedState.fields, expirationMonth: keepOnlyNumeric(action.payload) } };
    case REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_YEAR:
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, expirationYear: '' } };
      return { ...clonedState, fields: { ...clonedState.fields, expirationYear: keepOnlyNumeric(action.payload) } };
    case REDUCER_ACTION_TYPE.UPDATE_OWNER_NAME:
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, ownerName: '' } };
      return {
        ...clonedState,
        fields: { ...clonedState.fields, ownerName: keepOnlyAlphabetHangulAndSpace(action.payload) },
      };
    case REDUCER_ACTION_TYPE.UPDATE_VERIFICATION_CODE:
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, verificationCode: '' } };
      return { ...clonedState, fields: { ...clonedState.fields, verificationCode: keepOnlyNumeric(action.payload) } };
    case REDUCER_ACTION_TYPE.UPDATE_CARD_PASSWORD:
      if (!action.payload) return { ...clonedState, fields: { ...clonedState.fields, cardPassword: '' } };
      return { ...clonedState, fields: { ...clonedState.fields, cardPassword: keepOnlyNumeric(action.payload) } };
    case REDUCER_ACTION_TYPE.UPDATE_CARD_COMPANY:
      if (!action.payload) return { ...clonedState, options: { ...clonedState.options, cardCompany: '' } };
      return { ...clonedState, options: { ...clonedState.options, cardCompany: action.payload } };
    case REDUCER_ACTION_TYPE.UPDATE_CARD_NICKNAME:
      if (!action.payload) return { ...clonedState, options: { ...clonedState.options, cardNickname: '' } };
      return { ...clonedState, options: { ...clonedState.options, cardNickname: action.payload } };

    default:
      throw new Error('Invalid action type');
  }
};

export default reducer;
