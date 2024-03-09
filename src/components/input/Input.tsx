type InputType = "basic" | "underline" | "empty";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputType;
  width?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
}

function InputMain({
  variant,
  width = "100%",
  label,
  children,
  ...rest
}: InputProps) {
  return (
    <div
      className="input-container"
      style={{
        width: width,
        display: children ? "flex" : "block",
      }}
    >
      {label}
      <div className="input-box">
        <input className={`input-${variant}`} {...rest} />
      </div>
      {children}
    </div>
  );
}

interface LabelProps {
  label: string;
  children?: React.ReactNode;
}

function Label({ label, children }: LabelProps) {
  return (
    <label className="input-title">
      {label}
      <div>{children}</div>
    </label>
  );
}

export const Input = Object.assign(InputMain, { Label });
