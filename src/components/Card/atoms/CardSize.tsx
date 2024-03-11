type CardSizeProps = {
  size: 'small' | 'big';
  hasChip?: boolean;
  children?: React.ReactNode;
};

export default function CardSize({
  size,
  hasChip = false,
  children,
}: CardSizeProps) {
  return (
    <div className={`${size}-card${hasChip ? '__chip' : ''}`}>{children}</div>
  );
}
