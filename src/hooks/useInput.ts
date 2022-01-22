import React, { useState } from "react";

const useInput = ({
  initialValue,
  validator,
  inputRegex,
}: IUseInputConfig): IUseInputState => {
  const [value, setValue] = useState(initialValue ?? "");
  let isValid: boolean = false;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    isValid = !validator || validator(value);

    const isEnableInput = !inputRegex || inputRegex.test(value);

    if (isEnableInput) {
      setValue(value);
    }
  };

  return { value, onChange, isValid };
};

export interface IUseInputConfig {
  initialValue?: string;
  validator?: (val: string) => boolean;
  inputRegex?: RegExp;
  maxLength?: number;
}

export interface IUseInputState {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

export default useInput;
