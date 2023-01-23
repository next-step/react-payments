import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "../../../../../components/atoms";
import { InputInvalidMessage } from "../../../../../components";
import useCardPassword from "./hooks/useCardPassword";
import { usePasswordVirtualKeypad } from "./hooks";

interface IProps {
  invalidMessage?: string;
}

const CardPassword = forwardRef(
  ({ invalidMessage }: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      refs: [$first, $second],
      firstProps,
      secondProps,
      updatePassword,
    } = useCardPassword();

    const { handleFocus } = usePasswordVirtualKeypad(updatePassword);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => $first.current!);

    return (
      <>
        <div style={{ display: "flex", gap: "5px" }}>
          <Input
            ref={$first}
            invalid={firstProps.invalid}
            onInput={firstProps.handleInput}
            onFocus={handleFocus}
            className="w-15"
            nativeType="password"
            required
          />
          <Input
            ref={$second}
            invalid={secondProps.invalid}
            onInput={secondProps.handleInput}
            onFocus={handleFocus}
            className="w-15"
            nativeType="password"
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
