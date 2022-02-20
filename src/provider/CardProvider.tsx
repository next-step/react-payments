import useInputs from "hooks/useInputs";
import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import {
  Card,
  CardExpiration,
  CardName,
  CardNickname,
  CardNumbers,
  CardPassword,
  CardSecurityCode,
} from "types/common";

interface Props {
  children: ReactNode;
}

interface CardContextValue {
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
  cardNumbers: CardNumbers;
  cardExpiration: CardExpiration;
  cardName: CardName;
  securityCode: CardSecurityCode;
  password: CardPassword;
  cardNickname: CardNickname;
  onChangeCardContextValue: (event: ChangeEvent<HTMLInputElement>) => void;
  setCardContextValue: Dispatch<
    SetStateAction<{
      cardNumbers: {
        first: string;
        second: string;
        third: string;
        fourth: string;
      };
      cardExpiration: {
        month: string;
        year: string;
      };
      cardName: string;
      securityCode: string;
      password: {
        first: string;
        second: string;
        third: string;
        fourth: string;
      };
      cardNickname: string;
    }>
  >;
}

export const CardContext = createContext<CardContextValue | null>(null);

const CardProvider = ({ children }: Props): JSX.Element => {
  const [
    { cardNumbers, cardExpiration, cardName, securityCode, password, cardNickname },
    onChangeCardContextValue,
    setCardContextValue,
  ] = useInputs({
    cardNumbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    cardExpiration: {
      month: "",
      year: "",
    },
    cardName: "",
    securityCode: "",
    password: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    cardNickname: "",
  });

  const [cards, setCards] = useState<Card[]>([]);

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        cardNumbers,
        cardExpiration,
        cardName,
        securityCode,
        password,
        cardNickname,
        onChangeCardContextValue,
        setCardContextValue,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
