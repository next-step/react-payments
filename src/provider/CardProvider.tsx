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
}

export const CardContext = createContext<CardContextValue | null>(null);

const CardProvider = ({ children }: Props): JSX.Element => {
  const [{ cardNumbers, cardExpiration, cardName, securityCode, password, cardNickname }, onChangeCardContextValue] =
    useInputs({
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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
