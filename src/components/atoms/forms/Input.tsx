import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import classNames from "classnames";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  invalid?: boolean;
}

const Input = forwardRef(
  (
    { type = "text", className = "", invalid, ...props }: IProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={classNames("input-basic", className, { invalid })}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
