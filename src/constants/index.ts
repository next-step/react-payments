import { initCardState } from '@components/Card/type';

export const INIT_CARD_STATE: initCardState = Object.freeze({
  company: '',
  cardNumber: ['', '', '', ''],
  owner: '',
  expiryDate: ['', ''],
});
