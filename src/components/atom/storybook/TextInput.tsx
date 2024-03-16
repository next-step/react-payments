import { Input } from "@/components/atom/Input";
import { REGEX } from "@/constants/regex";
import { ChangeEvent, ComponentProps, useState } from "react";

type TProps = Omit<ComponentProps<typeof Input>, "onChange"> & {
  onChange?: (value: string) => void;
};
export const TextInput = ({ onChange, ...props }: TProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let filteredValue = inputValue.replace(REGEX.ONLY_TEXT_GLOBAL, "");
    //input의 maxLength에서 한글은 byte단위로 계산되어 한글자 더 입력되는 버그해결위해 추가
    if (props.maxLength) {
      filteredValue = filteredValue.slice(0, props.maxLength);
    }
    setValue(filteredValue);
    onChange?.(filteredValue);
  };
  return (
    <>
      <Input {...props} onChange={handleChange} value={value} />
    </>
  );
};
