export const ROUTE = {
  HOME: '/',
  CARD: '/card',
  CARD_CREATE: '/card/create',
  CARD_CREATE_COMPLETE: (cardId?: number) =>
    `/card/create/${cardId === undefined ? ':cardId' : cardId}`,
  CARD_NICKNAME_EDIT: (cardId?: number) =>
    `/card/edit/${cardId === undefined ? ':cardId' : cardId}`,
};
