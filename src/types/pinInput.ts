import { Input } from "@/components/atom/Input";
import { ComponentProps } from "react";

export type TPinInputProps = ComponentProps<typeof Input> & { mask?: boolean };
