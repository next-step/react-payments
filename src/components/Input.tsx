type InputType = "basic" | "underline";

interface InputProps {
  style: InputType;
  value: string;
  onChange?: (value: string) => void;
  onKeydown?: () => void;
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

  return (
    <>
      <input
        className={`input-${style}`}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeydown}
      />
    </>
  );
}
