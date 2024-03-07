type ButtonBoxProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function ButtonBox({
  className,
  onClick,
  children,
}: ButtonBoxProps) {
  return (
    <div className={`button-box ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
