import React, { LabelHTMLAttributes, memo, ReactNode } from "react";

export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  color?: string;
  children: ReactNode;
}

import { LabelEl } from "./label.style";

export default memo(function InputLabel({
  color = "#525252",
  className,
  children,
  ...props
}: InputLabelProps) {
  return (
    <LabelEl className={className} color={color} {...props}>
      {children}
    </LabelEl>
  );
});
