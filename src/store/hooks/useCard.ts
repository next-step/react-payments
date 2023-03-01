import useCardList from './useCardList';

const useCard = (id: number) => {
  const cardList = useCardList();
  const card = cardList.find((card) => card.id === id);
  if (!card) throw new Error('card is not found');
  return card;
};

export default useCard;
