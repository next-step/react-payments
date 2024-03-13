type InputBoxProps = {
  children: React.ReactNode;
  className?: string;
};
export default function InputBox({ className, children }: InputBoxProps) {
  return <div className={`input-box ${className}`}>{children}</div>;
}
