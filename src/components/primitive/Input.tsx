import { REGEX } from "@/constants/regex";
import { TInputProps } from "@/types/Input";
import React, { useState } from "react";
import styled from "styled-components";

export const Input = ({
  type = "text",
  // inputRuleFn,
  onChange,
  customType,
  ...props
}: TInputProps) => {
  const [value, setValue] = useState<string>("");

  const convertValueByCustomType = (value: string) => {
    switch (customType) {
      case "textOnly":
        return value.replace(REGEX.ONLY_TEXT, "");

      default:
        return value;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const convertedValue = value.length === 0 ? "" : onChange?.(e);
    setValue(convertedValue ?? "");
  };

  return (
    <InputBox>
      <input
        type={type}
        // {...(inputRuleFn && { value })}
        {...props}
        onChange={handleChange}
        value={value}
        // onChange={inputRuleFn ? handleChange : props.onChange}
      />
    </InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  align-items: center;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
  padding: 16px;
  input {
    width: 100%;
  }
`;
