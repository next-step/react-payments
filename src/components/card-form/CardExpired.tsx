import React from "react";
import { Input, InputInvalidMessage } from "../atoms";
import { useCardExpired } from "./hooks";

interface IProps {}

const MAX_LENGTH = 2;
export default function CardExpired(props: IProps) {
  const { $expirationMonth, $expirationYear, invalidProps } = useCardExpired();

  return (
    <>
      <div className="input-box w-50">
        <Input ref={$expirationMonth} placeholder="MM" maxLength={MAX_LENGTH} />
        /
        <Input ref={$expirationYear} placeholder="YY" maxLength={MAX_LENGTH} />
      </div>
      <InputInvalidMessage {...invalidProps} />
    </>
  );
}
