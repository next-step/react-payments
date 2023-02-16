import React from "react";

import { Input } from "@/components/common";

export default function CardNumberInput({ ...props }) {
  return <Input label="카드번호" textAlign="center" {...props} />;
}
