import { forwardRef } from "react";
import "./input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      value,
      type = "text",
      id,
      placeholder,
      onChange,
      maxLength,
      ...props
    },
    ref
  ) => {
    return (
      <input
        value={value}
        ref={ref}
        className={`input-basic ${className}`}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        {...props}
      />
    );
  }
);

export default Input;
