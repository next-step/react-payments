import { forwardRef, InputHTMLAttributes } from "react";

const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input type="text" className="input-basic" ref={ref} {...props} />;
});

TextInput.displayName = "TextInput";

export default TextInput;
