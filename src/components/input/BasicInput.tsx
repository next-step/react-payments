import { ReactNode } from "react";
import Input, { BaseInputProps } from "./Input";
import Label from "./Label";

interface BasicInputProps extends BaseInputProps {
  label: string;
  children?: ReactNode;
}

export default function BasicInput({
  label,
  value,
  onChange,
  onKeydown,
  placeHolder,
  inputRef,
  type,
  maxLength,
  children,
}: BasicInputProps) {
  return (
    <div className="input-container">
      <Label label={label}>{children}</Label>
      <div className="input-box">
        <Input
          style="basic"
          value={value}
          onChange={onChange}
          onKeydown={onKeydown}
          placeHolder={placeHolder}
          inputRef={inputRef}
          type={type}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
}
