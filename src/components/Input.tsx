interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange: () => void;
}

export default function Input({ className, onChange, ...rest }: InputProps) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input className={className} onChange={() => onChange()} {...rest} />
      </div>
    </div>
  );
}
