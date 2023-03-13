export const routes = {
  home: '/',
  cardCreator: '/add',
  nickname: '/nickname',
  createCardNickname: (cardId?: number | string) => (cardId ? `${routes.nickname}/${cardId}` : routes.nickname),
};
