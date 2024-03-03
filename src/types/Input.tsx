import { CSSProperties, InputHTMLAttributes } from "react";

export type TInputProps = Omit<
  React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange"
> & {
  customType?: "textOnly" | "numberOnly";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => string | void;
  textAlign?: CSSProperties["textAlign"];
  inputStyle?: CSSProperties;
};
