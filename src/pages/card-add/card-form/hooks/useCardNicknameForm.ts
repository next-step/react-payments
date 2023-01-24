import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { useMyCardsContext } from "../../../../providers/my-cards";
import { useNavigation } from "../../../hooks";
import { convertToCard } from "../../../../domain";
import { useCardStateContext } from "../../../../providers";

export default function useCardNicknameForm() {
  const [nickname, setNickname] = useState("");
  const { cardState } = useCardStateContext();
  const { addCard } = useMyCardsContext();
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
        addCard(card);
        goToCardList();
      }
    },
    [addCard, cardState, goToCardList, nickname]
  );

  const invalidButton = useMemo(() => nickname.length === 0, [nickname]);

  return {
    handleInputNickname,
    handleSubmit,
    invalidButton,
  };
}
