import { ComponentProps } from "react";

export type TInputProps = ComponentProps<"input"> & {
  variant?: "default" | "borderLess";
};
