import { Dispatch, SetStateAction, useCallback, useState } from "react";
import Input, { InputProps } from "../../../components/input/Input";
import InputTitle from "../../../components/input/InputTitle";

const EXPIRED_DATE_LENGTH = 6;

interface CardExpiredDateInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardExpiredDateInput({
  value,
  onChange,
}: CardExpiredDateInputProps) {
  return (
    <Input
      variant="basic"
      value={value}
      onChange={onChange}
      placeholder="MM/YYYY"
    >
      <InputTitle label="만료일" />
    </Input>
  );
}
