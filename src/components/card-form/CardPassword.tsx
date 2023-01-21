import { Input } from "../atoms";
import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { useCardPassword } from "./hooks";

interface IProps {}

const MAX_LENGTH = 1;

const CardPassword = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const $first = useCardPassword(() => $second.current?.focus());
    const $second = useCardPassword();

    useImperativeHandle(ref, () => $first.current!);

    return (
      <>
        <Input ref={$first} className="w-15" type="password" />
        <Input ref={$second} className="w-15" type="password" />
      </>
    );
  }
);

CardPassword.displayName = "CardPassword";

export default CardPassword;
