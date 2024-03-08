type FieldProps = {
  name?: string;
  value?: unknown;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    className?: string;
  };

export default function Input({ className, ...rest }: InputProps) {
  return <input className={`input-basic ${className}`} {...rest} />;
}
