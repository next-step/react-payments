import React, { ComponentProps, ForwardedRef, forwardRef } from "react";
import { Input } from "../atoms/forms";

type TProps = ComponentProps<typeof Input>;

const MAX_LENGTH = 4;

const CardNumberInputs = forwardRef(
  (props: TProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <Input ref={ref} {...props} maxLength={MAX_LENGTH} />;
  }
);

CardNumberInputs.displayName = "CardNumberInputs";

export default CardNumberInputs;
