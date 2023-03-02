import { CHANGE_CARD } from '../constants/action';

export const cardReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CARD.NUMBERS:
      return { ...state, cardNumbers: action.payload };
    case CHANGE_CARD.EXP_DATE:
      return { ...state, cardExpirationDate: action.payload };
    case CHANGE_CARD.OWNER:
      return { ...state, cardOwner: action.payload };
    case CHANGE_CARD.CVC:
      return { ...state, cardCVC: action.payload };
    case CHANGE_CARD.PW:
      return { ...state, cardPassword: action.payload };
    case CHANGE_CARD.COMPANY:
      return { ...state, cardCompanyId: action.payload };
    case CHANGE_CARD.NICKNAME:
      return { ...state, cardNickname: action.payload };
    case CHANGE_CARD.ERROR:
      return { ...state, error: action.payload };
    case CHANGE_CARD.ID:
      return { ...state, id: new Date() };
    default:
      throw new Error('Invalid action type');
  }
};
