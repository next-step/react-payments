import { ChangeEvent, useCallback } from "react";
import { Input } from "../atoms";
import { leaveOnlyNumber } from "../../utils";
import { useCardFormContext } from "./providers";

interface IProps {
  focusNext: () => void;
}

const MAX_LENGTH = 3;

export default function CardSecurityCode({ focusNext }: IProps) {
  const { changeCardState } = useCardFormContext();
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
