type InputType = "basic" | "underline";

interface InputProps {
  style: InputType;
  value: string;
  onChange?: (value: string) => void;
  onKeydown?: (value: string) => void;
}

export default function Input({
  style,
  value,
  onChange,
  onKeydown,
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
    />
  );
}
