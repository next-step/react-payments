import Input, { BaseInputProps } from "./Input";
import Label from "./Label";

interface BasicInputProps extends BaseInputProps {
  label: string;
}

export default function BasicInput({
  label,
  value,
  onChange,
  onKeydown,
  placeHolder,
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
          placeHolder={placeHolder}
        />
      </div>
    </div>
  );
}
