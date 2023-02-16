import React from "react";

import { CardExpireDateInputEl } from "./cardExpireDateInput.style";

export default function CardExpireDateInput({ ...props }) {
  return <CardExpireDateInputEl label="만료일" textAlign="center" {...props} />;
}
