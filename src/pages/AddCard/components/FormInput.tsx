import { Input } from "@/components/primitive/Input";
import { TInputProps } from "@/types/Input";
import { useState } from "react";
import styled from "styled-components";

type TProps = {
  lengthCheck?: boolean;
  maxLengthCheck?: number;
  label?: string;
  onChange: (value: string) => string | void;
};

export const FormInput = ({
  maxLength,
  //   inputRuleFn,
  onChange,
  label,
  lengthCheck,
  maxLengthCheck,
  ...props
}: Omit<TInputProps, "onChange"> & TProps) => {
  const [value, setValue] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    return onChange(value);
    // inputRuleFn?.(e.target.value);
  };
  return (
    <>
      <Header>
        <span className="input-title">{label}</span>
        {lengthCheck && (
          <span className="input-title">{`${
            value ? value.length : 0
          }/${maxLengthCheck}`}</span>
        )}
      </Header>
      <Input
        maxLength={maxLength}
        // inputRuleFn={inputRuleFn}
        {...props}
        // {...(lengthCheck && {
        //   onChange,
        // })}
        onChange={handleChange}
      />
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
