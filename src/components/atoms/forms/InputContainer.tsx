import { PropsWithChildren } from "react";
import classnames from "classnames";

interface IProps {
  title?: string;
  className?: string;
}

export default function InputContainer({
  title,
  className,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <div className={classnames("input-container", className)}>
      {title && <span className="input-title">{title}</span>}
      {children}
    </div>
  );
}
