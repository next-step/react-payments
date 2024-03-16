import { Input } from "@/components/atom/Input";
import { REGEX } from "@/constants/regex";
import { TNumberInputProps } from "@/types/numberInput";
import { ChangeEvent, ComponentProps, forwardRef, useState } from "react";

export const NumberInput = forwardRef<HTMLInputElement, TNumberInputProps>(
  ({ mask, onChange, ...props }, ref) => {
    const [value, setValue] = useState<ComponentProps<"input">["value"]>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const isNumber = REGEX.ONLY_NUMBER.test(inputValue);
      if (isNumber) {
        setValue(onChange?.(inputValue) ?? inputValue);
      }
    };
    return (
      <Input
        {...(mask && { type: "password" })}
        {...props}
        ref={ref}
        onChange={handleChange}
        value={value}
      />
    );
  }
);
