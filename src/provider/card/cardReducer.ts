import { ICardDTO } from '../../domain/types';

export interface ICardReducer {
  type: 'SET_CARD' | 'RESET_CARD';
  payload: ICardDTO;
}

const cardReducer = (state: ICardDTO, action: ICardReducer) => {
  switch (action.type) {
    case 'SET_CARD':
      return { ...state, ...action.payload };
    case 'RESET_CARD':
      return {};
  }
};

export default cardReducer;
