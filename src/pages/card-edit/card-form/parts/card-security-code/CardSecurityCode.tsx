import { Button, Input, InputInvalidMessage } from "../../../../../components";
import CardSecurityCodeTooltip from "./CardSecurityCodeTooltip";
import {
  useCardSecurityCode,
  useCardSecurityTooltip,
  useCardSecurityVirtualKeypad,
} from "./hooks";

interface IProps {
  focusNext: () => void;
  invalidMessage?: string;
}

export default function CardSecurityCode({
  focusNext,
  invalidMessage,
}: IProps) {
  const [$ref, { handleInput, invalid }] = useCardSecurityCode(focusNext);
  const { handleClickTooltip } = useCardSecurityTooltip();
  const { handleFocus } = useCardSecurityVirtualKeypad();

  return (
    <>
      <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
        <Input
          ref={$ref}
          className="w-25"
          nativeType="password"
          invalid={invalid}
          onInput={handleInput}
          onFocus={handleFocus}
          required
        />
        <Button onClick={handleClickTooltip}>
          <CardSecurityCodeTooltip />
        </Button>
      </div>
      <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
    </>
  );
}
