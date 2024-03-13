type CardBottomProps = {
  as?: 'info' | 'number';
  children: React.ReactNode;
};

export default function CardBottom({ as, children }: CardBottomProps) {
  return <div className={`card-bottom${as ? `__${as}` : ''}`}>{children}</div>;
}
