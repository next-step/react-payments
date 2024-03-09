import { ReactNode } from "react";

interface LabelProps {
  label: string;
  children?: ReactNode;
}

export default function InputTitle({ label, children }: LabelProps) {
  return (
    <label className="input-title">
      {label}
      <div>{children}</div>
    </label>
  );
}
