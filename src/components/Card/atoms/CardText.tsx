type CardTextProps = {
  fontSize?: 'small' | 'big';
  children: React.ReactNode;
};

export default function CardText({
  fontSize = 'small',
  children,
}: CardTextProps) {
  return (
    <span className={`card-text${fontSize === 'big' ? '__big' : ''}`}>
      {children}
    </span>
  );
}
