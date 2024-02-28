import { HTMLAttributes } from "react";

interface Input extends HTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: Input) {
  return <input {...props} />;
}
