type InputUnderLineProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function InputUnderLine({
  className,
  ...rest
}: InputUnderLineProps) {
  return <input className={`input-underline ${className}`} {...rest} />;
}
