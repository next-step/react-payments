interface LabelProps {
  children: React.ReactNode;
  button?: React.ReactNode;
}

export default function Title({ children, button }: LabelProps) {
  return (
    <h2 className="page-title">
      {button && button}
      {children}
    </h2>
  );
}
