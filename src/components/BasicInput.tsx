import Input from "./Input";
import Label from "./Label";

interface BasicInputProps {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
}

export default function BasicInput({
  label,
  value,
  onChange,
}: BasicInputProps) {
  return (
    <div className="input-container">
      <Label label={label} />
      <div className="input-box">
        <Input style="basic" value={value} onChange={onChange} />
      </div>
    </div>
  );
}
