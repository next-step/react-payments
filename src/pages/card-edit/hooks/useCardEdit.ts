import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { getInvalidCodes, TInvalidCode } from "../../../domain";
import { useCardStateContext, useMyCardsContext } from "../../../providers";

type TCardFormStep = "input-card-base" | "input-card-nickname";

const MESSAGE_MAP: Record<TInvalidCode, string> = {
  InvalidCardNumbers: "카드 번호가 유효하지 않습니다.",
  InvalidExpiryDate: "카드 만료일이 유효하지 않습니다.",
  InvalidSecurityCode: "보안 코드가 유효하지 않습니다.",
  InvalidOwner: "카드 소유자 이름을 입력해주세요.",
  InvalidPassword: "카드 비밀번호를 입력해주세요.",
};

function convertToMessage(invalidCodes: TInvalidCode[]) {
  return invalidCodes.reduce(
    (messageMap, key) => ({
      ...messageMap,
      [key]: MESSAGE_MAP[key],
    }),
    {}
  );
}

export default function useCardEdit(cardId?: string) {
  const { cardState, changeCardState } = useCardStateContext();
  const { myCards } = useMyCardsContext();
  const [step, setStep] = useState<TCardFormStep>("input-card-base");
  const invalidCodes = useMemo(() => getInvalidCodes(cardState), [cardState]);
  const invalidMessages = useMemo(
    () => convertToMessage(invalidCodes),
    [invalidCodes]
  );
  const currentCard = useMemo(() => {
    console.log(myCards, cardId);
    return myCards.find((card) => card.id === cardId);
  }, [cardId, myCards]);

  const handleSubmitBaseForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (invalidCodes.length === 0) {
        setStep("input-card-nickname");
      }
    },
    [invalidCodes.length]
  );

  useEffect(() => {
    if (!currentCard) {
      return;
    }
    changeCardState(currentCard);
    setStep("input-card-nickname");
  }, [changeCardState, currentCard]);

  return { handleSubmitBaseForm, step, cardState, invalidMessages };
}
