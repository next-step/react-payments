import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { ICardDTO, isValidExpiryDateBy } from "../../domain";

interface ICardFormContext {
  cardState: ICardDTO;
  changeCardState: (cardState: ICardDTO) => void;
  isValidExpiryDate: () => boolean;
}

const initValue: ICardFormContext = {
  cardState: {},
  changeCardState: () => null,
  isValidExpiryDate: () => false,
};

export const CardStateContext = createContext(initValue);

export default function CardStateProvider({ children }: PropsWithChildren) {
  const [cardState, setCardState] = useState<ICardDTO>({});
  const changeCardState = useCallback((newCardState: ICardDTO) => {
    setCardState((cardState) => ({
      ...cardState,
      ...newCardState,
    }));
  }, []);

  const isValidExpiryDate = useCallback(() => {
    return isValidExpiryDateBy(cardState.expiredYear, cardState.expiredMonth);
  }, [cardState.expiredMonth, cardState.expiredYear]);

  const contextValue = useMemo(
    () => ({ cardState, changeCardState, isValidExpiryDate }),
    [cardState, changeCardState, isValidExpiryDate]
  );

  return (
    <CardStateContext.Provider value={contextValue}>
      {children}
    </CardStateContext.Provider>
  );
}
