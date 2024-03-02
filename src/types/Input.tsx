import { InputHTMLAttributes } from "react";

export type TInputProps = Omit<
  React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange"
> & {
  inputRuleFn?: (value: string) => string;
  customType?: "textOnly";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => string | void;
};
