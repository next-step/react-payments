type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputBasic({ className, ...rest }: InputProps) {
  return <input className={`input-basic ${className}`} {...rest} />;
}
