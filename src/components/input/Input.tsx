import { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement> & {};

export default function Input(props: InputProps) {
  return <input {...props} />;
}
