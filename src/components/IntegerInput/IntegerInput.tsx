import { ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler } from "react";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

const IntegerInput = ({ value, onChange, ...restProps }: Props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    if (!Number.isInteger(Number(value))) {
      return;
    }

    onChange(value);
  };

  const handleDotKeyDown: KeyboardEventHandler = (event) => {
    if (/[.]/.test(event.key)) {
      event.preventDefault();
    }
  };
  return <input value={value} onKeyDown={handleDotKeyDown} onChange={handleChange} {...restProps} />;
};

export default IntegerInput;
export { Props };
