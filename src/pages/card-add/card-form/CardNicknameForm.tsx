import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import {
  Button,
  ButtonBox,
  Form,
  Input,
  InputContainer,
} from "../../../components";
import { useCardStateContext } from "../providers";
import { useMyCardsContext } from "../../../providers/my-cards";
import { convertToCard } from "../../../domain";
import { useNavigation } from "../../hooks";

export default function CardNicknameForm() {
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
      console.log({ card });
      if (card) {
        addCard(card);
        goToCardList();
      }
    },
    [addCard, cardState, goToCardList, nickname]
  );

  const invalidButton = useMemo(() => nickname.length === 0, [nickname]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer className="flex-center w-100">
        <Input
          className="w-75"
          type="underline"
          placeholder="카드의 별칭을 입력해주세요."
          onInput={handleInputNickname}
        />
      </InputContainer>

      <ButtonBox className="mt-50">
        <Button
          nativeType="submit"
          className="button-text"
          invalid={invalidButton}
          disabled={invalidButton}
        >
          다음
        </Button>
      </ButtonBox>
    </Form>
  );
}
