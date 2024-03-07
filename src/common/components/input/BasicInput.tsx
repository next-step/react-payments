import { InputHTMLAttributes, forwardRef } from "react";

interface BasicInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
  ({ type, value, className, onChange, ...props }, ref) => (
    <input type={type} value={value} className="input-basic" onChange={onChange} ref={ref} {...props} />
  )
);

export default BasicInput;
