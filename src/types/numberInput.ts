import { Input } from "@/components/atom/Input";
import { ComponentProps } from "react";

export type TNumberInputProps = Omit<
  ComponentProps<typeof Input>,
  "onChange"
> & {
  mask?: boolean;
  onChange?: (value: string) => void;
};
