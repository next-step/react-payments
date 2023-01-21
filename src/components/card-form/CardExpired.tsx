import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input, InputBox, InputInvalidMessage } from "../atoms";
import { useCardExpired } from "./hooks";
import { ICard } from "../../domain";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
  focusNext: () => void;
}

const MAX_LENGTH = 2;
const CardExpired = forwardRef(
  (
    { changeCardState, focusNext }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { $expirationMonth, $expirationYear, invalidProps } = useCardExpired(
      changeCardState,
      focusNext
    );

    useImperativeHandle(ref, () => $expirationMonth.current!);

    return (
      <>
        <InputBox className="w-50">
          <Input
            ref={$expirationMonth}
            placeholder="MM"
            maxLength={MAX_LENGTH}
          />
          /
          <Input
            ref={$expirationYear}
            placeholder="YY"
            maxLength={MAX_LENGTH}
          />
        </InputBox>
        <InputInvalidMessage {...invalidProps} />
      </>
    );
  }
);

CardExpired.displayName = "CardExpired";

export default CardExpired;
