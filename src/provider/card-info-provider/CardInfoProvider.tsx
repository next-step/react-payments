import {
  CARD_EXPIRATION_DATE_LIMIT,
  CARD_NUMBER_LIMIT,
  CARD_OWNER_NAME_LIMIT,
  CARD_PASSWORD_LIMIT,
  CARD_SECURITY_CODE_LIMIT,
} from '@/domain/constant';
import {type CardStateType} from '@/domain/type';
import {isFailed, isLimitFailed, isObjectFailed} from '@/domain/validate';
import {
  createContext, useState, type PropsWithChildren, useCallback,
} from 'react';

type CardInfoType = {
  cardState: CardStateType;
  handleCardState: (data: any) => void;
  reset: () => void;
  cardValidation: () => boolean;
};

const initialContext: CardInfoType = {
  cardState: {} as CardStateType,
  handleCardState: () => undefined,
  reset: () => undefined,
  cardValidation: () => false,
};

export const CardInfoContext = createContext(initialContext);

const CardInfoProvider = ({children}: PropsWithChildren) => {
  const [cardState, setCardState] = useState<CardStateType>({} as CardStateType);

  const handleCardState = useCallback((data: CardStateType) => {
    setCardState(prev => ({...prev, ...data}));
  }, []);
  const reset = () => {
    setCardState({});
  };

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
      isObjectFailed(cardNumbers, CARD_NUMBER_LIMIT)
      && isFailed(securityCode, CARD_SECURITY_CODE_LIMIT)
      && isFailed(firstCardPassword, CARD_PASSWORD_LIMIT)
      && isFailed(secondCardPassword, CARD_PASSWORD_LIMIT)
      && isLimitFailed(ownerName, CARD_OWNER_NAME_LIMIT)
      && isFailed(month, CARD_EXPIRATION_DATE_LIMIT)
      && isFailed(year, CARD_EXPIRATION_DATE_LIMIT)
    );
  };

  return (
    <CardInfoContext.Provider value={{
      cardState, handleCardState, reset, cardValidation,
    }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
