import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import { FormValues } from '@/type/formType';
import { initialFormData } from '@/constants/form';
import { generateUniqueId } from '@/utils/uniqueId';

interface CardInfoContextType extends PropsWithChildren {
  cardInfo: FormValues;
  cardList: FormValues[];
  setCardInfo: Dispatch<SetStateAction<FormValues>>;
  addCard: (card: FormValues) => void;
  updateCard: (name: string, value: string, card: FormValues) => void;
  deleteCard: (card: FormValues) => void;
  resetCard: () => void;
}

const CardInfoContext = createContext<CardInfoContextType | null>(null);

export const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardInfo, setCardInfo] = useState<FormValues>(initialFormData);
  const [cardList, setCardList] = useState<FormValues[]>([]);

  const addCard = useCallback((card: FormValues) => {
    const newCard = { ...card, id: generateUniqueId() };

    setCardInfo(newCard);
    setCardList((prevCardList) => [...prevCardList, newCard]);
  }, []);

  const updateCard = useCallback(
    (name: string, value: string, card: FormValues) => {
      const updatedCard = { ...card, [name]: value, updatedAt: new Date() };

      setCardList((prevCardList) =>
        prevCardList.map((prevCard) =>
          prevCard.id === card.id ? updatedCard : prevCard
        )
      );
    },
    []
  );

  const deleteCard = useCallback((card: FormValues) => {
    setCardList((prevCardList) =>
      prevCardList.filter((prevCard) => prevCard.id !== card.id)
    );
  }, []);

  const resetCard = useCallback(() => {
    setCardInfo(initialFormData);
  }, []);

  const cardListContext = {
    cardInfo,
    cardList,
    setCardInfo,
    addCard,
    updateCard,
    deleteCard,
    resetCard,
  };

  return (
    <CardInfoContext.Provider value={{ ...cardListContext }}>
      {children}
    </CardInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);

  if (!context) {
    throw new Error('useCardInfoContext must be used within a FormProvider');
  }

  return context;
};
