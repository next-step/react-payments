import { Input } from "@/components/atom/Input";
import { ComponentProps } from "react";

export type TFormInputProps = ComponentProps<typeof Input> & {
  label: string;
};
