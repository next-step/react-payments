import React, { InputHTMLAttributes } from "react";

import { Input } from "@/components/common";

export default function CardNameInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <Input variant="underlined" textAlign="center" {...props} />;
}
