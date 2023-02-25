import { PropsWithChildren, useState } from "react";
import PaymentsContext from "./context";

export type CardNumber = [string, string, string, string];
export type ExpirationDate = {month: string, year: string};

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>(["", "", "", ""]);
  const [cardExpiration, setCardExpiration] = useState<ExpirationDate>({ month: '', year: '' });
  const [cardOwnerName, setCardOwnerName] = useState<string>("");
  const [password, setPassword] = useState<string[]>(["", ""]);
  const [cvc, setCvc] = useState<string>("");

  const handleChangeCardNumber = (cardNumbers: CardNumber) => {
    setCardNumbers(cardNumbers);
  };

  const handleChangeExpirationDate = ({ month, year }: ExpirationDate) => {
    setCardExpiration({ month, year });
  };

  const handleCardOwner = (value: string) => {
    setCardOwnerName(value);
  };

  const handleCvc = (value: string) => {
    if (Number.isNaN(+value)) {
      alert("보안코드는 숫자만 입력해주세요!");
      return;
    }
    setCvc(value);
  };

  const handlePassword = (values: string[]) => {
      setPassword(values);
    };

  const value = {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};
