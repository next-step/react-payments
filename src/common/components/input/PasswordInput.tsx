import { forwardRef, InputHTMLAttributes } from "react";

const PasswordInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input type="password" className="input-basic" ref={ref} {...props} />;
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
