type EmptyCardProps = {
  onCardClick?: () => void;
  children: React.ReactNode;
};

export default function EmptyCard({ onCardClick, children }: EmptyCardProps) {
  return (
    <div onClick={onCardClick} className='empty-card'>
      {children}
    </div>
  );
}
