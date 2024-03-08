import { InputHTMLAttributes, forwardRef } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ type, value, onChange, ...props }, ref) => (
    <input
      type={type}
      value={value}
      className="input-basic"
      onChange={onChange}
      ref={ref}
      {...props}
    />
  )
);

BasicInput.displayName = "BasicInput";

export default BasicInput;
