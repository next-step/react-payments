import { NumberInput } from "@/components/atom/NumberInput";
import { ComponentProps } from "react";

const commonProps: ComponentProps<typeof NumberInput> = {
  variant: "borderLess",
  maxLength: 4,
  style: { textAlign: "center" },
};

export const inputProps: ComponentProps<typeof NumberInput>[] = [
  {
    ...commonProps,
  },
  {
    ...commonProps,
  },
  {
    ...commonProps,
    mask: true,
  },
  {
    ...commonProps,
    mask: true,
  },
];
