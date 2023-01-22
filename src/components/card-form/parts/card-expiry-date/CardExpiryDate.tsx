import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input, InputBox, InputInvalidMessage } from "../../../atoms";
import { useCardExpired } from "./hooks";

interface IProps {
  focusNext: () => void;
}

const CardExpiryDate = forwardRef(
  ({ focusNext }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      refs: [$month, $year],
      monthProps,
      yearProps,
      invalidMessage,
    } = useCardExpired(focusNext);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $month.current!);

    return (
      <>
        <InputBox className="w-50">
          <Input ref={$month} {...monthProps} required />
          /
          <Input ref={$year} {...yearProps} required />
        </InputBox>
        <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
      </>
    );
  }
);

CardExpiryDate.displayName = "CardExpiryDate";

export default CardExpiryDate;
