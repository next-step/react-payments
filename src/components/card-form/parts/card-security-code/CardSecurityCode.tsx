import { Input } from "../../../atoms";
import { useCardSecurityCode } from "./hooks";

interface IProps {
  focusNext: () => void;
}

export default function CardSecurityCode({ focusNext }: IProps) {
  const [$ref, { handleInput, invalid }] = useCardSecurityCode(focusNext);

  return (
    <Input
      ref={$ref}
      className="w-25"
      type="password"
      invalid={invalid}
      onInput={handleInput}
    />
  );
}
