import { InputHTMLAttributes, forwardRef } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ ...props }, ref) => <input className="input-basic" ref={ref} {...props} />
);

BasicInput.displayName = "BasicInput";

export default BasicInput;
