type InputType = "basic" | "underline";

export interface BaseInputProps {
  value: string;
  onChange?: (value: string) => void;
  onKeydown?: (value: string) => void;
  placeHolder?: string;
}
interface InputProps extends BaseInputProps {
  style: InputType;
}

export default function Input({
  style,
  value,
  onChange,
  onKeydown,
  placeHolder,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeydown?.(e.key);
  };

  return (
    <input
      className={`input-${style}`}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeHolder}
    />
  );
}
