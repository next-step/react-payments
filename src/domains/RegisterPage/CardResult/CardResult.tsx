import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardRegistration } from "../CardRegister/CardRegister";
import { NameQuery } from "../CardNaming/CardNaming";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Card } from "../CardRegister/types";
import { initialCards } from "../../../constants";

interface CardResultProps {
  store: Record<string, unknown>;
}

export default function CardResult({ store }: CardResultProps) {
  const [cards, setCards] = useLocalStorage<Card[]>("mycards", initialCards);
  const navigate = useNavigate();
  useEffect(() => {
    const registration = store["register"] as CardRegistration;
    const naming = store["naming"] as NameQuery;

    const newCard: Card = {
      ...registration,
      holderName: naming.cardName,
      createdAt: new Date(),
      expiration: registration.expirationDate,
    };

    cards ? setCards([...cards, newCard]) : setCards([newCard]);

    navigate("/mycards");
  }, [cards]);

  return <></>;
}
