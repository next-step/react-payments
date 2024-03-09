type InputType = "basic" | "underline" | "empty";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputType;
  width?: string;
  children?: React.ReactNode;
}

export default function Input({
  variant,
  width = "100%",
  children,
  ...rest
}: InputProps) {
  return (
    <div className="input-container" style={{ width: width }}>
      {children}
      <div className="input-box">
        <input className={`input-${variant}`} {...rest} />
      </div>
    </div>
  );
}
