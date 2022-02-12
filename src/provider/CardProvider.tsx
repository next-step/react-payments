import useInputs from "hooks/useInputs";
import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { CardExpiration, CardName, CardNickname, CardNumbers, CardPassword, CardSecurityCode } from "types/common";

interface Props {
  children: ReactNode;
}

interface CardContextValue {
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
  setDeepCardContextValue: (e: ChangeEvent<HTMLInputElement>, key: string) => void;
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

  const setDeepCardContextValue = (e: ChangeEvent<HTMLInputElement>, key: string): void => {
    const { name, value } = e.target as {
      name: "cardNumbers" | "cardExpiration" | "password";
      value: string;
    };

    setCardContextValue((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        [key]: value,
      },
    }));
  };

  return (
    <CardContext.Provider
      value={{
        cardNumbers,
        cardExpiration,
        cardName,
        securityCode,
        password,
        cardNickname,
        onChangeCardContextValue,
        setCardContextValue,
        setDeepCardContextValue,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
