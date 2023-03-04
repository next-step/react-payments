import { useCallback, useEffect, useState } from "react";
import { usePaymentsDispatch } from "store/context";
import {
  CardInfo,
  CardCompany,
  CardNumber,
  CardPassword,
  ExpirationDate,
} from "store/type";

export const useForm = () => {
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

  const [cardNickName, setCardNickName] = useState<string>("");

  const dispatch = usePaymentsDispatch();

  const handleChangeCardNumber = useCallback((cardNumbers: CardNumber) => {
    setCardNumbers(cardNumbers);
  }, []);

  const handleChangeExpirationDate = useCallback(
    (name: string, value: string) => {
      setCardExpiration((prev: any) => ({
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

  const handleCardSubmit = (payload: CardInfo) => {
    dispatch({ type: "ADD_CARD_INFO", newCard: payload });
  };

  const handleCardNickName = useCallback((nickName: string) => {
    setCardNickName(nickName);
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

  return {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    isModalOpen,
    cardCompany,
    cardNickName,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
    handleCardCompany,
    handleCardSubmit,
    handleCardNickName,
  };
};
