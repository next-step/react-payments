import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "../atoms";
import { useCardNumber } from "./hooks";

interface IProps {
  focusNext: () => void;
  type?: string;
  onInput: () => void;
}

const CardNumber = forwardRef(
  (
    { focusNext, type = "text", onInput }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { $cardNumber, invalid, handleInput } = useCardNumber({
      focusNext,
      onInput,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $cardNumber.current!);

    return (
      <Input
        ref={$cardNumber}
        type={type}
        invalid={invalid}
        required
        onInput={handleInput}
      />
    );
  }
);

CardNumber.displayName = "CardNumber";

export default CardNumber;
