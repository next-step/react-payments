import Input, { BaseInputProps } from "./Input";

export default function UnderlineInput({ value, onChange }: BaseInputProps) {
  return (
    <div className="input-container">
      <Input style="underline" value={value} onChange={onChange} />
    </div>
  );
}
