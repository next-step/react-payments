import { Input } from "../atoms";
import { ICard } from "../../domain";
import { ChangeEvent, useCallback } from "react";
import { leaveOnlyNumber } from "../../utils";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
}

const MAX_LENGTH = 3;

export default function CardSecurityCode({ changeCardState }: IProps) {
  const handleInputSecurityCode = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      target.value = leaveOnlyNumber(target.value);
      changeCardState({ securityCode: target.value });
    },
    [changeCardState]
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
