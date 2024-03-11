import { useMemo } from "react";
import { initialCards } from "../constants";
import { Card } from "../domains/RegisterPage/CardRegister/types";
import useLocalStorage from "./useLocalStorage";

type useCardsArgs = {
  sortByKey?: keyof Card;
  sortMethod?: "asc" | "dcs";
};

export default function useCards({
  sortByKey = "createdAt",
  sortMethod = "asc",
}: useCardsArgs) {
  const [cards, setCards] = useLocalStorage<Card[]>("mycards", initialCards);

  const sortedCards = useMemo(() => {
    const isAscended = sortMethod === "asc";
    return cards.sort((a, b) => {
      const keyA = isAscended
        ? a[sortByKey].toString()
        : b[sortByKey].toString();
      const keyB = isAscended
        ? b[sortByKey].toString()
        : a[sortByKey].toString();

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;

      return 0;
    });
  }, [cards, sortByKey, sortMethod]);

  function deleteCard(uuid: string) {
    return function deleteCard() {
      const filtered = sortedCards.filter((value) => uuid !== value.uuid);
      setCards(filtered);
    };
  }

  return { cards: sortedCards, setCards, deleteCard };
}
