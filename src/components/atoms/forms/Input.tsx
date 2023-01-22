import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import classNames from "classnames";

type TBaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface IProps extends Omit<TBaseInputProps, "type"> {
  nativeType?: TBaseInputProps["type"];
  type?: "basic" | "underline";
  invalid?: boolean;
}

const Input = forwardRef(
  (
    {
      nativeType = "text",
      type = "basic",
      className = "",
      invalid,
      ...props
    }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={classNames(`input-${type}`, className, { invalid })}
        type={nativeType}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
