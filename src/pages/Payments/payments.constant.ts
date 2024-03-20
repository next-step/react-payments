/**
 * Paymanets Funnel은 다음과 같은 순서로 진행됩니다.
 * 카드 목록, 카드 추가, 카드 추가 완료, 카드 결제로 구성되어 있습니다.
 */
export const STEP = {
  INITIAL_STEP: 'cardList',
  CARD_LIST: 'cardList',
  ADD_CARD: 'addCard',
  CARD_CONFIG: 'cardConfig',
  CARD_PAYMENT: 'cardPayment',
} as const;
