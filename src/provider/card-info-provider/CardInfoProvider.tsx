import {
  CARD_EXPIRATION_DATE_LIMIT,
  CARD_NUMBER_LIMIT,
  CARD_OWNER_NAME_LIMIT,
  CARD_PASSWORD_LIMIT,
  CARD_SECURITY_CODE_LIMIT,
} from '@/domain/constant';
import { type CardBrand, type CardStateType } from '@/domain/type';
import { isFailed, isLimitFailed, isObjectFailed } from '@/domain/validate';
import { createContext, type PropsWithChildren } from 'react';
import useCardInfo from './hooks/useCardInfo';
import useCardList from './hooks/useCardList';

type CardListType = CardStateType & CardBrand;

type MyCardListType = {
  myCardList: CardListType[];
  addCard: (card: CardListType) => void;
  removeCard: (i: number) => void;
};

type CardInfoType = {
  cardState: CardStateType;
  handleCardState: (data: CardStateType) => void;
  reset: () => void;
  cardValidation: () => boolean;
} & MyCardListType;

const initialContext: CardInfoType = {
  cardState: {},
  myCardList: [],
  handleCardState: () => undefined,
  addCard: () => undefined,
  reset: () => undefined,
  cardValidation: () => false,
  removeCard: () => undefined,
};

export const CardInfoContext = createContext(initialContext);

const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const { cardState, handleCardState, reset } = useCardInfo();
  const { myCardList, addCard, removeCard } = useCardList();

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
        removeCard,
      }}
    >
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
