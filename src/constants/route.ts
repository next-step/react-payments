export const ROUTE = {
  HOME: '/',
  CARD: '/card',
  CARD_CREATE: '/card/create',
  CARD_CREATE_COMPLETE: (cardId = ':cardId') => `/card/create/${cardId}`,
  CARD_NICKNAME_EDIT: (cardId = ':cardId') => `/card/edit/${cardId}`,
};
