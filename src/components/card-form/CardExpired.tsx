import React, { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input, InputInvalidMessage } from "../atoms";
import { useCardExpired } from "./hooks";
import { ICard } from "../../domain";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
}

const MAX_LENGTH = 2;
const CardExpired = forwardRef(
  ({ changeCardState }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { $expirationMonth, $expirationYear, invalidProps } =
      useCardExpired(changeCardState);

    useImperativeHandle(ref, () => $expirationMonth.current!);

    return (
      <>
        <div className="input-box w-50">
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
        </div>
        <InputInvalidMessage {...invalidProps} />
      </>
    );
  }
);

CardExpired.displayName = "CardExpired";

export default CardExpired;
