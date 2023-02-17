import React from "react";

import { CardCvcInputEl } from "./cardCvcInput";

export default function CardCvcInput({ ...props }) {
  return (
    <CardCvcInputEl
      label="보안 코드(CVC/CVV)"
      textAlign="center"
      type="password"
      {...props}
    />
  );
}
