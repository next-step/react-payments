import { Input } from "@/components/atom/Input";
import { REGEX } from "@/constants/regex";
import { TNumberInputProps } from "@/types/numberInput";
import { ChangeEvent, ComponentProps, forwardRef, useState } from "react";

export const NumberInput = forwardRef<HTMLInputElement, TNumberInputProps>(
  ({ mask, ...props }, ref) => {
    const [value, setValue] = useState<ComponentProps<"input">["value"]>("");

    const filterValueOnlyNumber = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const numberedValue = inputValue.replace(REGEX.ONLY_NUMBER, "");
      setValue(numberedValue);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      filterValueOnlyNumber(e);
      props.onChange?.(e);
    };

    return (
      <Input
        value={value}
        {...(mask && { type: "password" })}
        {...props}
        ref={ref}
        onChange={onChange}
      />
    );
  }
);
