import { REGEX } from "@/constants/regex";
import { TInputProps } from "@/types/Input";
import React, { useState } from "react";
import styled from "styled-components";

export const Input = ({
  type = "text",
  onChange,
  customType,
  style,
  inputStyle,
  ...props
}: TInputProps) => {
  const [value, setValue] = useState<string | number | readonly string[]>(
    props.value ?? ""
  );

  const convertValueByCustomType = (value: string) => {
    switch (customType) {
      case "textOnly":
        return value.replace(REGEX.ONLY_TEXT, "");

      case "numberOnly":
        return value.replace(REGEX.ONLY_NUMBER, "");

      default:
        return value;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (customType) {
      e.target.value = convertValueByCustomType(value);
    }
    if (onChange) {
      setValue(onChange?.(e) ?? "");
    } else {
      setValue(value);
    }
  };

  return (
    <InputBox style={style}>
      <input
        type={type}
        {...props}
        onChange={handleChange}
        value={value}
        style={inputStyle}
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
