type InputType = "basic" | "underline" | "empty";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputType;
  label: string;
  children?: React.ReactNode;
}

export default function Input({ variant, children, ...rest }: InputProps) {
  return (
    <div className="input-container">
      {children}
      <div className="input-box">
        <input className={`input-${variant}`} {...rest} />
      </div>
    </div>
  );
}
