type CardSizeProps = {
  size: 'small' | 'big';
  chip?: boolean;
  children?: React.ReactNode;
};

export default function CardSize({
  size,
  chip = false,
  children,
}: CardSizeProps) {
  return (
    <div className={`${size}-card${chip ? '__chip' : ''}`}>{children}</div>
  );
}
