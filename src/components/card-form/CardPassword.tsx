import { Input } from "../atoms";
import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { useCardPassword } from "./hooks";

const CardPassword = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const $first = useCardPassword(() => $second.current?.focus());
  const $second = useCardPassword();

  useImperativeHandle(ref, () => $first.current!);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <Input ref={$first} className="w-15" type="password" />
      <Input ref={$second} className="w-15" type="password" />
      <div className="flex-center w-15">•</div>
      <div className="flex-center w-15">•</div>
    </div>
  );
});

CardPassword.displayName = "CardPassword";

export default CardPassword;
