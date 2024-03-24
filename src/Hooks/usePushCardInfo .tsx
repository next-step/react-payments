import { useRegisteredCards } from "../Context/RegisteredCardsProvider";
import { useCardInfo } from "../Context/CardProvider";
import { CardInfoType } from "../type/CardInfoType";
const usePushCardInfo = () => {
  const { state } = useCardInfo();
  const { handleCard, handleDeleteCard } = useRegisteredCards();
  const { cards } = useRegisteredCards();

  const handlePushCardInfo = () => {
    const isKeyExist = cards.some(
      (card: CardInfoType) => card.key === state.key
    );
    if (isKeyExist) {
      const filteredCards = cards.filter(
        (card: CardInfoType) => card.key !== state.key
      );
      handleDeleteCard([...filteredCards, state]);
    } else {
      handleCard(state);
    }
  };

  return { handlePushCardInfo };
};

export default usePushCardInfo;
