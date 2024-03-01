type InputType = "basic" | "underline";

interface InputProps {
  style: InputType;
  value: string | number;
  onChange: (value: string | number) => void;
}

export default function Input({ style, value, onChange }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input className={`input-${style}`} onChange={handleChange} value={value} />
  );
}
