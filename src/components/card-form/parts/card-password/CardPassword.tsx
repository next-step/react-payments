import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "../../../atoms";
import { useCardPassword } from "./hooks";

const CardPassword = forwardRef((_, ref: ForwardedRef<HTMLInputElement>) => {
  const $first = useCardPassword(() => $second.current?.focus());
  const $second = useCardPassword();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useImperativeHandle(ref, () => $first.current!);

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <Input ref={$first} className="w-15" type="password" required />
      <Input ref={$second} className="w-15" type="password" required />
      <div className="flex-center w-15">•</div>
      <div className="flex-center w-15">•</div>
    </div>
  );
});

CardPassword.displayName = "CardPassword";

export default CardPassword;
