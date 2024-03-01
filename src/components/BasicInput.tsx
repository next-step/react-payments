import Input from "./Input";
import Label from "./Label";

interface BasicInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  onKeydown?: () => void;
}

export default function BasicInput({
  label,
  value,
  onChange,
  onKeydown,
}: BasicInputProps) {
  return (
    <div className="input-container">
      <Label label={label} />
      <div className="input-box">
        <Input
          style="basic"
          value={value}
          onChange={onChange}
          onKeydown={onKeydown}
        />
      </div>
    </div>
  );
}
