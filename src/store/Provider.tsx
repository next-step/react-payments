import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import PaymentsContext from "./context";
import { CardCompany, CardNumber, Card, ExpirationDate, CardPassword } from "./type";

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>(["", "", "", ""]);
  const [cardExpiration, setCardExpiration] = useState<ExpirationDate>({
    month: "",
    year: "",
  });
  const [cardOwnerName, setCardOwnerName] = useState<string>("");
  const [password, setPassword] = useState<CardPassword>(["", ""]);
  const [cvc, setCvc] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardCompany, setCardCompany] = useState<CardCompany>({
    name: "",
    color: "",
  });
  const [cards, setCards] = useState<Card[]>([]);

  const handleChangeCardNumber = useCallback((cardNumbers: CardNumber) => {
    setCardNumbers(cardNumbers);
  }, []);

  const handleChangeExpirationDate = useCallback(
    (name: string, value: string) => {
      setCardExpiration((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleCardOwner = useCallback((value: string) => {
    setCardOwnerName(value);
  }, []);

  const handleCvc = useCallback((value: string) => {
    setCvc(value);
  }, []);

  const handlePassword = useCallback((values: CardPassword) => {
    console.log("values", values)
    setPassword(values);
  }, []);

  const handleCardCompany = useCallback((payload: CardCompany) => {
    setCardCompany(payload);
  }, []);

  const handleCardSubmit = useCallback((payload: Card) => {
    console.log("payload", payload)
    setCards((prev) => [...prev, payload]);
  }, []);

  useEffect(() => {
    const cardComp = cardNumbers.join("").length === 8;
    if (cardComp) {
      setIsModalOpen(true);
    }
  }, [cardNumbers]);

  useEffect(() => {
    if (cardCompany.name) {
      setIsModalOpen(false);
    }
  }, [cardCompany]);

  const value = {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    isModalOpen,
    cardCompany,
    cards,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
    handleCardCompany,
    handleCardSubmit
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};
