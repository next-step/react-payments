import { InputType, InputTypeAttribute } from "@common/constants";
import React, { useState } from "react";

const useInput = ({
  initialValue,
  validator,
  inputRegex,
  type,
}: IUseInputConfig): IUseInputState => {
  const [value, setValue] = useState(initialValue ?? "");
  const [isValid, setIsValid] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    const curIsValid = !validator || validator(value);

    if (curIsValid !== isValid) {
      setIsValid(curIsValid);
    }

    const isEnableInput = !inputRegex || inputRegex.test(value);

    if (isEnableInput) {
      setValue(value);
    }
  };

  return { value, onChange, isValid, type: type ?? InputType.text };
};

export interface IUseInputConfig {
  initialValue?: string;
  validator?: (val: string) => boolean;
  inputRegex?: RegExp;
  type?: InputTypeAttribute;
}

export interface IUseInputState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  type: InputTypeAttribute;
}

export default useInput;
