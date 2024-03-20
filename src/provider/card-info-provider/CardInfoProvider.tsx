import {
  CARD_EXPIRATION_DATE_LIMIT,
  CARD_NUMBER_LIMIT,
  CARD_OWNER_NAME_LIMIT,
  CARD_PASSWORD_LIMIT,
  CARD_SECURITY_CODE_LIMIT,
} from '@/domain/constant';
import { type CardBrand, type CardStateType } from '@/domain/type';
import { isFailed, isLimitFailed, isObjectFailed } from '@/domain/validate';
import { createContext, useState, type PropsWithChildren, useCallback } from 'react';

type CardListType = CardStateType & CardBrand;
type MyCardListType = {
  myCardList: CardListType[];
  addCard: (card: CardListType) => void;
  // removeCard: (i: number) => void;
};

type CardInfoType = {
  cardState: CardStateType;
  handleCardState: (data: CardStateType) => void;
  reset: () => void;
  cardValidation: () => boolean;
} & MyCardListType;

const initialContext: CardInfoType = {
  cardState: {} as CardStateType,
  myCardList: [],
  handleCardState: () => undefined,
  addCard: () => undefined,
  reset: () => undefined,
  cardValidation: () => false,
  // removeCard: () => undefined,
};

export const CardInfoContext = createContext(initialContext);

const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardStateType>({} as CardStateType);
  const handleCardState = useCallback((data: CardStateType) => {
    setCardState((prev) => ({ ...prev, ...data }));
  }, []);

  const reset = () => setCardState({});

  const [myCardList, setMyCardList] = useState<CardListType[]>([]);
  const addCard = (card: CardListType) => setMyCardList((prev) => [...prev, card]);
  // const removeCard = (i: number) => {
  //   setMyCardList(myCardList.filter((item) => item.id !== i));
  // };

  const cardValidation = () => {
    const {
      cardNumbers,
      securityCode,
      firstCardPassword,
      secondCardPassword,
      ownerName,
      month,
      year,
    } = cardState;

    return (
      isObjectFailed(cardNumbers, CARD_NUMBER_LIMIT) &&
      isFailed(securityCode, CARD_SECURITY_CODE_LIMIT) &&
      isFailed(firstCardPassword, CARD_PASSWORD_LIMIT) &&
      isFailed(secondCardPassword, CARD_PASSWORD_LIMIT) &&
      isLimitFailed(ownerName, CARD_OWNER_NAME_LIMIT) &&
      isFailed(month, CARD_EXPIRATION_DATE_LIMIT) &&
      isFailed(year, CARD_EXPIRATION_DATE_LIMIT)
    );
  };

  return (
    <CardInfoContext.Provider
      value={{
        cardState,
        myCardList,
        handleCardState,
        addCard,
        reset,
        cardValidation,
        // removeCard,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
