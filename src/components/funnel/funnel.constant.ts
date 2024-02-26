// 카드 추가, 카드 추가 완료, 카드 목록, 카드 결제

export const STEP = {
  INITIAL_STEP: 'addCard', // FIXME: 추후 수정 필요
  ADD_CARD: 'addCard',
  ADD_CARD_COMPLETE: 'addCardComplete',
  CARD_LIST: 'cardList',
  CARD_PAYMENT: 'cardPayment',
} as const;
