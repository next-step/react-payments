import {
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Input } from "../../../../../components/atoms";
import { useCardNumber } from "./hooks";

interface IProps {
  focusNext: () => void;
  nativeType?: string;
  onInput: () => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

const CardNumber = forwardRef(
  (
    { focusNext, nativeType = "text", onInput, onFocus }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { $cardNumber, invalid, handleNumberInput } = useCardNumber({
      focusNext,
      onInput,
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $cardNumber.current!);

    return (
      <Input
        ref={$cardNumber}
        nativeType={nativeType}
        invalid={invalid}
        required
        onInput={handleNumberInput}
        onFocus={onFocus}
      />
    );
  }
);

CardNumber.displayName = "CardNumber";

export default CardNumber;
