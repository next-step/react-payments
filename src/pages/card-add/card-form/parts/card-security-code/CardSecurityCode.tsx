import { Input, InputInvalidMessage } from "../../../../../components";
import { useCardSecurityCode } from "./hooks";

interface IProps {
  focusNext: () => void;
  invalidMessage?: string;
}

export default function CardSecurityCode({
  focusNext,
  invalidMessage,
}: IProps) {
  const [$ref, { handleInput, invalid }] = useCardSecurityCode(focusNext);

  return (
    <>
      <Input
        ref={$ref}
        className="w-25"
        type="password"
        invalid={invalid}
        onInput={handleInput}
        required
      />
      <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
    </>
  );
}
