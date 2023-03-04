import { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { initNewCard } from 'src/utils/inits';
import { INewCard } from 'src/utils/types';

interface INewCardContext {
  cardInfo: INewCard;
  handleCardInfo: (newInfo: INewCard) => void;
}

const INIT_CARD_CONTEXT: INewCardContext = {
  cardInfo: initNewCard,
  handleCardInfo: () => {},
};

export const NewCardContext = createContext(INIT_CARD_CONTEXT);

const NewCardProvider = ({ children }: PropsWithChildren) => {
  const [cardInfo, setCardInfo] = useState(INIT_CARD_CONTEXT.cardInfo);

  const handleCardInfo = (newInfo: INewCard) => {
    setCardInfo(newInfo);
  };

  const cardContextValues: INewCardContext = useMemo(
    () => ({
      cardInfo,
      handleCardInfo,
    }),
    [cardInfo],
  );
  return (
    <NewCardContext.Provider value={cardContextValues}>
      {children}
    </NewCardContext.Provider>
  );
};

export default NewCardProvider;
