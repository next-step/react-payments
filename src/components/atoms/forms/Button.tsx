import classnames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

type TButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends Omit<TButtonProps, "type"> {
  nativeType?: TButtonProps["type"];
  type?: "transparent";
}

export default function Button({
  children,
  className,
  nativeType = "button",
  type = "transparent",
  ...props
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={classnames(`button`, `button-type-${type}`, className)}
      type={nativeType}
      {...props}
    >
      {children}
    </button>
  );
}
