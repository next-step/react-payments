import Input from "./Input";

interface UnderlineInput {
  value: string;
  onChange: (value: string) => void;
}
export default function UnderlineInput({ value, onChange }: UnderlineInput) {
  return (
    <div className="input-container">
      <Input style="underline" value={value} onChange={onChange} />
    </div>
  );
}
