import React, {
  LabelHTMLAttributes,
  memo,
  PropsWithChildren,
  useMemo,
} from "react";

export interface InputLabelProps
  extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {
  color?: string;
  isError?: boolean;
}

import * as S from "./label.style";

export default memo(function InputLabel({
  color = "#525252",
  isError = false,
  className,
  children,
  ...props
}: InputLabelProps) {
  const labelColor = useMemo(() => (isError ? "#e81e1e" : color), []);

  return (
    <S.Label className={className} color={labelColor} {...props}>
      {children}
    </S.Label>
  );
});
