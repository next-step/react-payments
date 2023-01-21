import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";

type TProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef(
  (
    { type = "text", className = "", ...props }: TProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        className={`input-basic ${className}`}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
