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
  invalid?: boolean;
}

export default function Button({
  children,
  className,
  nativeType = "button",
  type = "transparent",
  invalid,
  ...props
}: PropsWithChildren<IProps>) {
  return (
    <button
      className={classnames(`button`, `button-type-${type}`, className, {
        invalid,
      })}
      type={nativeType}
      {...props}
    >
      {children}
    </button>
  );
}
