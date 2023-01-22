import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { ICard, isValidExpiryDateBy } from "../../../domain";

interface ICardFormContext {
  cardState: Partial<ICard>;
  changeCardState: (cardState: Partial<ICard>) => void;
  isValidExpiryDate: () => boolean;
}

interface IProps {
  children: (cardState: Partial<ICard>) => ReactNode;
}

const initValue: ICardFormContext = {
  cardState: {},
  changeCardState: () => null,
  isValidExpiryDate: () => false,
};

export const CardFormContext = createContext(initValue);

export default function CardFormProvider({ children }: IProps) {
  const [cardState, setCardState] = useState<Partial<ICard>>({});
  const changeCardState = useCallback((newCardState: Partial<ICard>) => {
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
    <CardFormContext.Provider value={contextValue}>
      {children(cardState)}
    </CardFormContext.Provider>
  );
}
