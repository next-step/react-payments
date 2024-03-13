type InputUnderLineProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputUnderLine({
  className,
  ...rest
}: InputUnderLineProps) {
  return <input className={`input-underline ${className}`} {...rest} />;
}
