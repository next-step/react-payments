import { isMonth } from '@/utils/is';
import { keepOnlyAlphabetHangulAndSpace, keepOnlyNumeric } from '@/utils/regex';
import { CardFormState } from './CardFormContext';

export enum REDUCER_ACTION_TYPE {
  UPDATE_CARD_NUMBER = 'UPDATE_CARD_NUMBER',
  UPDATE_EXPIRATION_MONTH = 'UPDATE_EXPIRATION_MONTH',
  UPDATE_EXPIRATION_YEAR = 'UPDATE_EXPIRATION_YEAR',
  UPDATE_OWNER_NAME = 'UPDATE_OWNER_NAME',
  UPDATE_VERIFICATION_CODE = 'UPDATE_VERIFICATION_CODE',
  UPDATE_CARD_PASSWORD = 'UPDATE_CARD_PASSWORD',
  DELETE_CARD_PASSWORD = 'DELETE_CARD_PASSWORD',
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
      clonedState.fields.cardNumber = replacedText;
      return clonedState;
    }

    case REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_MONTH:
      if (!action.payload) {
        clonedState.fields.expirationMonth = '';
        clonedState.isErrorField.expirationMonth = false;

        return clonedState;
      } else {
        clonedState.fields.expirationMonth = keepOnlyNumeric(action.payload);
        const monthValue = clonedState.fields.expirationMonth;
        clonedState.isErrorField.expirationMonth = !isMonth(monthValue) || monthValue.length !== 2;

        return clonedState;
      }

    case REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_YEAR:
      if (!action.payload) {
        clonedState.fields.expirationYear = '';
        return clonedState;
      }
      clonedState.fields.expirationYear = keepOnlyNumeric(action.payload);
      return clonedState;

    case REDUCER_ACTION_TYPE.UPDATE_OWNER_NAME:
      if (!action.payload) {
        clonedState.fields.ownerName = '';
        return clonedState;
      }
      clonedState.fields.ownerName = keepOnlyAlphabetHangulAndSpace(action.payload);
      return clonedState;

    case REDUCER_ACTION_TYPE.UPDATE_VERIFICATION_CODE:
      if (!action.payload) {
        clonedState.fields.verificationCode = '';
        return clonedState;
      }
      clonedState.fields.verificationCode = keepOnlyNumeric(action.payload);
      return clonedState;

    case REDUCER_ACTION_TYPE.UPDATE_CARD_PASSWORD:
      if (!action.payload) {
        clonedState.fields.cardPassword = '';
        return clonedState;
      }
      if (clonedState.fields.cardPassword.length >= 2) return clonedState;
      clonedState.fields.cardPassword += keepOnlyNumeric(action.payload);
      return clonedState;

    case REDUCER_ACTION_TYPE.DELETE_CARD_PASSWORD:
      clonedState.fields.cardPassword = clonedState.fields.cardPassword.slice(0, -1);
      return clonedState;

    case REDUCER_ACTION_TYPE.UPDATE_CARD_COMPANY:
      if (!action.payload) {
        clonedState.options.cardCompany = '';
        return clonedState;
      }
      clonedState.options.cardCompany = action.payload;
      return clonedState;

    case REDUCER_ACTION_TYPE.UPDATE_CARD_NICKNAME:
      if (!action.payload) {
        clonedState.options.cardNickname = '';
        return clonedState;
      }
      clonedState.options.cardNickname = action.payload;
      return clonedState;

    default:
      throw new Error('Invalid action type');
  }
};

export default reducer;
