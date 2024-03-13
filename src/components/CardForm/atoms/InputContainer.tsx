type ContainerProps = {
  size?: string;
  children: React.ReactNode;
};

export default function InputContainer({ size, children }: ContainerProps) {
  return (
    <div className={`input-container ${size ? size : ''}`}>{children}</div>
  );
}
