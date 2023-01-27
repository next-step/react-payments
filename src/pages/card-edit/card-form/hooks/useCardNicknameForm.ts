import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useMyCardsContext } from "../../../../providers/my-cards";
import { useNavigation } from "../../../hooks";
import { convertToCard } from "../../../../domain";
import { useCardStateContext } from "../../../../providers";

export default function useCardNicknameForm() {
  const [nickname, setNickname] = useState("");
  const { cardState } = useCardStateContext();
  const { saveCard } = useMyCardsContext();
  const { goToCardList } = useNavigation();

  const handleInputNickname = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setNickname(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const card = convertToCard({ ...cardState, nickname });
      if (card) {
        saveCard(card);
        goToCardList();
      }
    },
    [saveCard, cardState, goToCardList, nickname]
  );

  return {
    handleInputNickname,
    handleSubmit,
  };
}
