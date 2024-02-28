import { InputHTMLAttributes, useState, ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  label?: string;
  maxLength?: number;
}

export default function Input({
  type,
  label,
  maxLength,
  placeholder,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      {label && <span className="input-title">{label}</span>}
      <input
        type={type}
        value={inputValue}
        className="input-basic"
        placeholder={placeholder}
        onChange={handleChangeInputValue}
        maxLength={maxLength}
      />
    </div>
  );
}
