import { HTMLInputTypeAttribute } from "react";

export type InputClassName = {
  inputContainerClassName?: string;
  inputBoxClassName?: string;
  inputClassName?: string;
};

export type InputList = {
  value: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
};
