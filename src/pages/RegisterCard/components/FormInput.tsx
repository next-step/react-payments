import { Input } from "@/components/primitive/Input";
import { TInputProps } from "@/types/Input";
import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

type TProps = {
  lengthCheck?: boolean;
  label?: string;
  onChange?: (value: string) => string | void;
  inputStyle?: CSSProperties;
};

export const FormInput = React.memo(
  ({
    maxLength,
    onChange,
    label,
    lengthCheck,
    ...props
  }: Omit<TInputProps, "onChange"> & TProps) => {
    const [value, setValue] = useState<string>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
      return onChange?.(value);
    };
    return (
      <FormInputContainer>
        <Header>
          {label && <span className="input-title">{label}</span>}
          {lengthCheck && (
            <span className="input-title">{`${
              value ? value.length : 0
            }/${maxLength}`}</span>
          )}
        </Header>
        <Input maxLength={maxLength} {...props} onChange={handleChange} />
      </FormInputContainer>
    );
  }
);

const FormInputContainer = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
