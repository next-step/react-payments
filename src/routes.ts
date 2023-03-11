export const routes = {
  home: '/',
  cardCreator: '/add',
  createCardNickname: (cardId?: number | string) => (cardId ? `/nickname/${cardId}` : '/nickname'),
};
