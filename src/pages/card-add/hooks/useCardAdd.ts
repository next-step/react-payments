import { FormEvent, useCallback, useMemo, useState } from "react";
import { useCardStateContext } from "../providers";
import { getInvalidCodes, TInvalidCode } from "../../../domain";

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

export default function useCardAdd() {
  const { cardState } = useCardStateContext();
  const [step, setStep] = useState<TCardFormStep>("input-card-base");
  const invalidCodes = useMemo(() => getInvalidCodes(cardState), [cardState]);
  const invalidMessages = useMemo(
    () => convertToMessage(invalidCodes),
    [invalidCodes]
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (invalidCodes.length === 0) {
        setStep("input-card-nickname");
      }
    },
    [invalidCodes.length]
  );

  return { handleSubmit, step, cardState, invalidMessages };
}
