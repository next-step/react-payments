import { Input } from "@/components/atom/Input";
import { ComponentProps } from "react";

export type TNumberInputProps = ComponentProps<typeof Input> & {
  mask?: boolean;
};
