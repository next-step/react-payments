import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import PaymentsContext from "./context";
import {
  CardCompany,
  CardNumber,
  Card,
  ExpirationDate,
  CardPassword,
} from "./type";

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

  const [cardNickName, setCardNickName] = useState<string>("");

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
    setPassword(values);
  }, []);

  const handleCardCompany = useCallback((payload: CardCompany) => {
    setCardCompany(payload);
  }, []);

  const handleCardSubmit = useCallback((payload: Card) => {
    setCards((prev) => [...prev, payload]);
  }, []);

  const handleCardNickName = useCallback((payload: string) => {
    setCardNickName(payload);
  }, []);

  const handleNickNameCardMerge = useCallback((payload: string) => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards[newCards.length - 1].cardNickName = payload;
      return newCards;
    });
  }, []);

  const handleInitialCardState = useCallback(() => {
    // 초기화
    setCardNumbers(["", "", "", ""]);
    setCardExpiration({
      month: "",
      year: "",
    });
    setCardOwnerName("");
    setCvc("");
    setPassword(["", ""]);
    setCardCompany({
      name: "",
      color: "",
    });
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
    cardNickName,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
    handleCardCompany,
    handleCardSubmit,
    handleCardNickName,
    handleNickNameCardMerge,
    handleInitialCardState
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};
