import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "../../../../../components/atoms";
import { InputInvalidMessage } from "../../../../../components";
import useCardPassword from "./hooks/useCardPassword";

interface IProps {
  invalidMessage?: string;
}

const CardPassword = forwardRef(
  ({ invalidMessage }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      refs: [$first, $second],
      firstProps,
      secondProps,
    } = useCardPassword();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $first.current!);

    return (
      <>
        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            ref={$first}
            invalid={firstProps.invalid}
            onInput={firstProps.handleInput}
            className="w-15"
            type="password"
            required
          />
          <Input
            ref={$second}
            invalid={secondProps.invalid}
            onInput={secondProps.handleInput}
            className="w-15"
            type="password"
            required
          />
          <div className="flex-center w-15">•</div>
          <div className="flex-center w-15">•</div>
        </div>
        <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
      </>
    );
  }
);

CardPassword.displayName = "CardPassword";

export default CardPassword;
