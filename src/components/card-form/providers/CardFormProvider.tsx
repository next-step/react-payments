import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { ICard } from "../../../domain";

interface ICardFormContext {
  cardState: Partial<ICard>;
  changeCardState: (cardState: Partial<ICard>) => void;
}

interface IProps {
  children: (cardState: Partial<ICard>) => ReactNode;
}

const initValue: ICardFormContext = {
  cardState: {},
  changeCardState: () => null,
};

export const CardFormContext = createContext(initValue);

export default function CardFormProvider({ children }: IProps) {
  const [cardState, setCardState] = useState<Partial<ICard>>({});
  const changeCardState = useCallback(
    (newCardState: Partial<ICard>) => {
      setCardState({
        ...cardState,
        ...newCardState,
      });
    },
    [cardState]
  );

  const contextValue = useMemo(
    () => ({ cardState, changeCardState }),
    [cardState, changeCardState]
  );
  return (
    <CardFormContext.Provider value={contextValue}>
      {children(cardState)}
    </CardFormContext.Provider>
  );
}
