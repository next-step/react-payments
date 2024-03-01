interface LabelProps {
  label: string;
}

export default function Label({ label }: LabelProps) {
  return <label className="input-title">{label}</label>;
}
