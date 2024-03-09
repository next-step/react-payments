import { Input } from "@/components/atom/Input";
import { REGEX } from "@/constants/regex";
import { TNumberInputProps } from "@/types/numberInput";
import { ChangeEvent, ComponentProps, useState } from "react";

export const NumberInput = ({ mask, ...props }: TNumberInputProps) => {
  const [value, setValue] = useState<ComponentProps<"input">["value"]>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numberedValue = inputValue.replace(REGEX.ONLY_NUMBER, "");
    setValue(numberedValue);
  };
  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        {...(mask && { type: "password" })}
        {...props}
      />
    </>
  );
};
