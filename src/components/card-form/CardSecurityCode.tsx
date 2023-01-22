import { ChangeEvent, useCallback } from "react";
import { Input } from "../atoms";
import { ICard } from "../../domain";
import { leaveOnlyNumber } from "../../utils";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
  focusNext: () => void;
}

const MAX_LENGTH = 3;

export default function CardSecurityCode({
  changeCardState,
  focusNext,
}: IProps) {
  const handleInputSecurityCode = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      target.value = leaveOnlyNumber(target.value);
      changeCardState({ securityCode: target.value });
      if (target.value.length === MAX_LENGTH) {
        focusNext();
      }
    },
    [changeCardState, focusNext]
  );

  return (
    <Input
      className="w-25"
      type="password"
      onInput={handleInputSecurityCode}
      maxLength={MAX_LENGTH}
      defaultValue=""
    />
  );
}
